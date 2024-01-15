"use client"

import { User, Users } from "lucide-react"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card copy"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpForm() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center mb-10">
              Registeration
            </CardTitle>
            <div className="grid grid-cols-2 gap-6 mt-10">
            <Button variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Team
            </Button>
            <Button variant="outline">
              <User className="mr-2 h-4 w-4"/>
              Individual
            </Button>
          </div>
            <CardDescription className="text-center">
                Choose if you are team or indiviaul
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="uhmanoa@hawaii.edu" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">UH ID</Label>
              <Input id="password" type="password" placeholder="2505xxxx" />
            </div>
            <span className=" text-blue-600 hover:underline text-sm">
              Need help?
            </span>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full">Register</Button>
          </CardFooter>
          <div className="relative mb-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            {/* <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div> */}
          </div>
          <p className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Need more information about datathon?{" "}
            <span className=" text-blue-600 hover:underline">info</span>
          </p>
        </Card>
      </div>
    </div>
  )
}