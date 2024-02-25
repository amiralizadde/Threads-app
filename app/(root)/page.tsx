import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     <UserButton afterSignOutUrl="/" />
     <h1> threads </h1>
    </main>
  );
}
