import React from 'react'
import { cn } from '@/lib/utils'

interface FormFieldProps {
  label: string
  required?: boolean
  error?: string
  success?: string
  className?: string
  children: React.ReactNode
  description?: string
}

export function FormField({
  label,
  required = false,
  error,
  success,
  className,
  children,
  description,
}: FormFieldProps) {
  const fieldId = React.useId()

  return (
    <div className={cn('space-y-2', className)}>
      <label
        htmlFor={fieldId}
        className={cn(
          'block text-sm font-semibold text-foreground',
          error && 'text-red-600',
          success && 'text-green-600',
        )}
      >
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>

      {description && (
        <p
          className="text-sm text-muted-foreground"
          id={`${fieldId}-description`}
        >
          {description}
        </p>
      )}

      <div className="relative">
        {React.cloneElement(children as React.ReactElement<any>, {
          id: fieldId,
          'aria-describedby': error
            ? `${fieldId}-error`
            : success
              ? `${fieldId}-success`
              : description
                ? `${fieldId}-description`
                : undefined,
          'aria-invalid': error ? true : false,
        })}
      </div>

      {error && <ErrorMessage id={`${fieldId}-error`} message={error} />}

      {success && (
        <SuccessMessage id={`${fieldId}-success`} message={success} />
      )}
    </div>
  )
}

interface ErrorMessageProps {
  id: string
  message: string
  className?: string
}

export function ErrorMessage({ id, message, className }: ErrorMessageProps) {
  return (
    <div
      id={id}
      role="alert"
      aria-live="polite"
      className={cn('flex items-center text-sm text-red-600 mt-1', className)}
    >
      <svg
        className="w-4 h-4 mr-1 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </div>
  )
}

interface SuccessMessageProps {
  id: string
  message: string
  className?: string
}

export function SuccessMessage({
  id,
  message,
  className,
}: SuccessMessageProps) {
  return (
    <div
      id={id}
      role="status"
      aria-live="polite"
      className={cn('flex items-center text-sm text-green-600 mt-1', className)}
    >
      <svg
        className="w-4 h-4 mr-1 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {message}
    </div>
  )
}
