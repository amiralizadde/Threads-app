import { SignUp } from "@clerk/nextjs";
 
export default function SignUpPage() {
  return (
    <div>
      <h1>Sign Up route</h1>
      <SignUp />
    </div>
  );
}