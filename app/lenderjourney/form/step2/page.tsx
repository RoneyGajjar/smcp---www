"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
import { Textarea } from "@/components/ui/textarea"
export default function StepTwoPage() {
    const router = useRouter()
    const [showStatusBar, setShowStatusBar] = React.useState(true)
    const [showActivityBar, setShowActivityBar] = React.useState(false)
    const [showPanel, setShowPanel] = React.useState(false)

    return (
        <>
            <CardHeader>
                <CardTitle>Lending Information</CardTitle>
                <CardDescription>
                    Update your lending information below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FieldGroup>
                    <form>
                        <Field>
                            <FieldLabel htmlFor="fieldgroup-name">Minimum Amount</FieldLabel>
                            <Input id="fieldgroup-name" placeholder="$1,000,000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="fieldgroup-name">Maximum Amount</FieldLabel>
                            <Input id="fieldgroup-name" placeholder="$10,000,000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="form-phone">Minimum Annual Revenue</FieldLabel>
                            <Input id="form-phone" placeholder="$100,000" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="form-phone">Minimum Time in Business (Months)</FieldLabel>
                            <Input id="form-phone" placeholder="12 Months" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="form-phone">Minimum Credit Score</FieldLabel>
                            <Input id="form-phone" placeholder="650" />
                        </Field>

                        <div className="pt-3 flex items-center gap-4">
                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Lender Type</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40">
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                        <DropdownMenuCheckboxItem
                                            checked={showStatusBar ?? false}
                                            onCheckedChange={setShowStatusBar}
                                        >
                                            Status Bar
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={showActivityBar}
                                            onCheckedChange={setShowActivityBar}
                                            disabled
                                        >
                                            Activity Bar
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={showPanel}
                                            onCheckedChange={setShowPanel}
                                        >
                                            Panel
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Loan Product Type</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40">
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                        <DropdownMenuCheckboxItem
                                            checked={showStatusBar ?? false}
                                            onCheckedChange={setShowStatusBar}
                                        >
                                            Status Bar
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={showActivityBar}
                                            onCheckedChange={setShowActivityBar}
                                            disabled
                                        >
                                            Activity Bar
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={showPanel}
                                            onCheckedChange={setShowPanel}
                                        >
                                            Panel
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu >
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">Business Type</Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-40">
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                                        <DropdownMenuCheckboxItem
                                            checked={showStatusBar ?? false}
                                            onCheckedChange={setShowStatusBar}
                                        >
                                            Status Bar
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={showActivityBar}
                                            onCheckedChange={setShowActivityBar}
                                            disabled
                                        >
                                            Activity Bar
                                        </DropdownMenuCheckboxItem>
                                        <DropdownMenuCheckboxItem
                                            checked={showPanel}
                                            onCheckedChange={setShowPanel}
                                        >
                                            Panel
                                        </DropdownMenuCheckboxItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <Field>
                            <FieldLabel htmlFor="textarea-message">Description</FieldLabel>
                            <FieldDescription>Enter your description below.</FieldDescription>
                            <Textarea id="textarea-message" placeholder="Type your description here." />
                        </Field>






                        <Field orientation="horizontal" className="pt-3">
                            <Button type="reset" variant="outline"
                                onClick={() => router.back()}>
                                Previous
                            </Button>
                            <Button type="submit">Submit</Button>
                        </Field>
                    </form>
                </FieldGroup>
            </CardContent>
            <CardFooter>
            </CardFooter>
        </>
    )
}