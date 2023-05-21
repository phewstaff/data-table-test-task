import Link from "next/link";
import { AuthForm } from "../../components/auth-form";
import { Separator } from "@/components/ui/separator";

export default async function AuthPage() {
  return (
    <div className=" container mx-auto flex h-screen w-full flex-col items-center justify-center">
      <AuthForm
        endpoint={"register"}
        buttonText={"Sign Up"}
        toastSuccessMessage={"зарегистрировались"}
      />

      <section className="my-4 flex w-[80%] items-center justify-center overflow-hidden md:w-1/2">
        <Separator />
        <Link className="cursor-pointer px-1" href={"/auth"}>
          <p className="whitespace-nowrap text-sm text-muted-foreground">
            Or sign in if you already have account
          </p>
        </Link>
        <Separator />
      </section>
    </div>
  );
}
