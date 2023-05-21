import Link from "next/link";
import { AuthForm } from "../../components/auth-form";
import { Separator } from "@/components/ui/separator";

export default async function AuthPage() {
  return (
    <div className=" container mx-auto flex h-screen w-full flex-col items-center justify-center">
      <AuthForm
        endpoint={"login"}
        buttonText={"Sign In"}
        toastSuccessMessage={"вошли в аккаунт"}
      />

      <section className="my-4 flex w-[80%] items-center justify-center overflow-hidden md:w-1/2">
        <Separator />

        <Link className="cursor-pointer px-1" href={"/sign-up"}>
          <p className="whitespace-nowrap text-sm text-muted-foreground">
            Or sign up if you don't have account
          </p>
        </Link>

        <Separator />
      </section>
    </div>
  );
}
