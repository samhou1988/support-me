import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PersonStandingIcon } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <PersonStandingIcon size={80} className="text-pink-500" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to your supportMe account</CardDescription>
        </CardHeader>
        <CardContent>Login Form</CardContent>
        <CardFooter className="justify-between">
          <small>Did not have an account</small>
          <Button asChild variant="outline" size="sm">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}