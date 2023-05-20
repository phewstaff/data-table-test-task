import { AuthForm } from "./auth-form";

export default async function AuthPage() {
  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <AuthForm />
    </div>
  );
}
