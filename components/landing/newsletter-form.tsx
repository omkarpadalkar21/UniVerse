"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
})

export default function NewsletterForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
    mode: "onChange",
  })

  function onSubmit(values: z.infer<typeof schema>) {
    // Simulate async subscription
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: `You're on the UniVerse list: ${values.email}`,
      })
      form.reset()
    }, 600)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="mx-auto flex flex-col sm:flex-row gap-3 max-w-xl"
      aria-label="Newsletter subscription"
    >
      <div className="flex-1">
        <Input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          {...form.register("email")}
          className="w-full bg-white text-black border-4 border-black rounded-2xl font-bold placeholder:text-neutral-600 px-4 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        />
        {form.formState.errors.email && (
          <p className="mt-2 text-left text-sm font-bold text-red-600">{form.formState.errors.email.message}</p>
        )}
      </div>
      <Button
        type="submit"
        disabled={!form.formState.isValid || form.formState.isSubmitting}
        className="bg-blue-600 text-white border-4 border-black rounded-2xl font-black uppercase px-6 py-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white"
      >
        Subscribe
      </Button>
    </form>
  )
}
