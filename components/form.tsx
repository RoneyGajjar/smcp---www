"use client"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function FormRhfInput() {
  const router = useRouter() 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault() 
    console.log("Form submitted, moving to next step...")
    router.push("/lenderjourney/form/step2")
  }

  return (
    <>
      <CardHeader className="px-0 pt-0">
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>
          Update your personal information below.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <FieldGroup>
          <form onSubmit={handleSubmit}>
            <Field>
              <FieldLabel htmlFor="firstName">First Name</FieldLabel>
              <Input id="firstName" placeholder="Jordan" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
              <Input id="lastName" placeholder="Lee" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
              <Input id="form-phone" placeholder="(123) 456-7890" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
                required
              />
              <FieldDescription>
                We&apos;ll send updates to this address.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="form-status">Communication Mode</FieldLabel>
              <NativeSelect id="form-status" required>
                <NativeSelectOption value="" >
                  Select communication mode
                </NativeSelectOption>
                <NativeSelectOption value="email">Email</NativeSelectOption>
                <NativeSelectOption value="phone">Phone</NativeSelectOption>
                <NativeSelectOption value="mail">Both</NativeSelectOption>
              </NativeSelect>
            </Field>
            <Field orientation="horizontal" className="pt-3">
              <Button type="reset" variant="outline">
                Reset
              </Button>
              <Button type="submit" className="bg-primary hover:bg-secondary text-white">
                Next
              </Button>
            </Field>
          </form>
        </FieldGroup>
      </CardContent>
      <CardFooter>
      </CardFooter>
      </>
  )
}