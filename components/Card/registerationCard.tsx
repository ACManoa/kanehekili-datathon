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
import {useRouter} from "next/navigation";

export default function SignUpForm() {

  const router = useRouter();
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center mb-10">
              Registeration
            </CardTitle>
          {/*  <div className="grid grid-cols-2 gap-6 mt-10">*/}
          {/*  <Button variant="outline">*/}
          {/*    <Users className="mr-2 h-4 w-4" />*/}
          {/*    Team*/}
          {/*  </Button>*/}
          {/*  <Button variant="outline">*/}
          {/*    <User className="mr-2 h-4 w-4"/>*/}
          {/*    Individual*/}
          {/*  </Button>*/}
          {/*</div>*/}
            <CardDescription className="text-center">
              <div>The only requirement to participate is being a student!
              </div>
               <div>
              Students of all majors/data science levels can participate!
               </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2 text-center">
              <Label className="text-xl mt-6 mb-4" htmlFor="Step1">STEP 1</Label>
              <div className="text-lg">
                Register as a Kanekehili Datathon participant
              </div>
              <Button className="w-full mt-2 mb-8" onClick={() => router.push('https://forms.gle/74eHk3ZWGekb7BfN7 ')}>Register</Button>
            </div>
            <div className="grid gap-2 text-center">
              <Label className="text-xl mt-4 mb-4" htmlFor="Step2">STEP 2</Label>
              <div className="text-lg">
                Form a team and then register your team to compete in Kanekehili Datathon
              </div>
              <Button className="w-full mt-2 mb-8" onClick={() => router.push('https://forms.gle/L3P55WFz9Ux8kyvD6')}>Register your team</Button>
            </div>
            {/*<span className=" text-blue-600 hover:underline text-sm">*/}
            {/*  Need help?*/}
            {/*</span>*/}
          </CardContent>
          {/*<CardFooter className="flex flex-col">*/}
          {/*  <Button className="w-full">Register</Button>*/}
          {/*</CardFooter>*/}
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
          <div className="mt-2 text-xs text-center text-gray-700 mb-2">
            {" "}
            Need more information about datathon?{" "}
            <div className=" text-blue-600 hover:underline" onClick={() => router.push('/')}>info</div>
          </div>
        </Card>
      </div>
    </div>
  )
}