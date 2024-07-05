import Form from "@/components/forms";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <Form />
      <LogoutLink>Logout</LogoutLink>
    </main>
  );
}
