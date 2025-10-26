import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Contact</h1>
        <p className="text-lg text-muted-foreground">
          Contact page will be implemented in a later step.
        </p>
      </div>
    </div>
  )
}