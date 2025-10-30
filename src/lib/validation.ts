import React from 'react'
import { z } from 'zod'

// Validation schemas
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'Name can only contain letters, spaces, hyphens, and apostrophes',
    ),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),

  whatsapp: z
    .string()
    .min(1, 'WhatsApp number is required')
    .refine((value) => {
      // Use a simple regex to check for international format
      return /^\+\d{1,4}\d{6,14}$/.test(value)
    }, 'Please enter a valid international WhatsApp number'),

  service: z.string().min(1, 'Please select a service'),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
})

export const consultationFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(
      /^[a-zA-Z\s'-]+$/,
      'Name can only contain letters, spaces, hyphens, and apostrophes',
    ),

  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),

  whatsapp: z
    .string()
    .min(10, 'WhatsApp number must be at least 10 digits')
    .max(15, 'WhatsApp number must be less than 15 digits')
    .regex(/^\d+$/, 'WhatsApp number can only contain digits'),

  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional(),
})

// Validation types
export type ContactFormData = z.infer<typeof contactFormSchema>
export type ConsultationFormData = z.infer<typeof consultationFormSchema>

// Validation result type
export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
}

// Validation function
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): ValidationResult {
  try {
    schema.parse(data)
    return { isValid: true, errors: {} }
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {}
      error.issues.forEach((issue) => {
        if (issue.path.length > 0) {
          errors[issue.path[0] as string] = issue.message
        }
      })
      return { isValid: false, errors }
    }
    return { isValid: false, errors: { general: 'Validation failed' } }
  }
}

// Real-time validation hook
export function useFormValidation<T>(
  schema: z.ZodObject<any>,
  initialData: Partial<T> = {},
) {
  const [data, setData] = React.useState<Partial<T>>(initialData)
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [touched, setTouched] = React.useState<Record<string, boolean>>({})

  const validateField = React.useCallback(
    (field: keyof T, value: any) => {
      try {
        // Get the field schema from the shape
        const fieldSchema = schema.shape[field as string]
        if (fieldSchema) {
          fieldSchema.parse(value)
          setErrors((prev) => ({ ...prev, [field]: '' }))
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          const fieldError = error.issues[0]?.message || 'Invalid value'
          setErrors((prev) => ({ ...prev, [field]: fieldError }))
        }
      }
    },
    [schema],
  )

  const validateAll = React.useCallback(() => {
    const result = validateForm(schema, data)
    setErrors(result.errors)
    return result.isValid
  }, [schema, data])

  const setFieldValue = React.useCallback(
    (field: keyof T, value: any) => {
      setData((prev) => ({ ...prev, [field]: value }))
      if (touched[field as string]) {
        validateField(field, value)
      }
    },
    [touched, validateField],
  )

  const setFieldTouched = React.useCallback(
    (field: keyof T) => {
      setTouched((prev) => ({ ...prev, [field]: true }))
      validateField(field, data[field])
    },
    [data, validateField],
  )

  const reset = React.useCallback(() => {
    setData(initialData)
    setErrors({})
    setTouched({})
  }, [initialData])

  return {
    data,
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    validateAll,
    reset,
    isValid: Object.keys(errors).length === 0,
  }
}
