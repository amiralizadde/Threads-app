import { SignIn , UserButton } from "@clerk/nextjs";
 
export default function SignInPage() {
  return (
    <div>
      <h1>Sign In route</h1>
      <SignIn />
    </div>
  );
}