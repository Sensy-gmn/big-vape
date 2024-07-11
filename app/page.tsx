import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <Button asChild>
        <LoginLink>Se connecter</LoginLink>
      </Button>
      <Button variant="secondary" asChild>
        <RegisterLink>S&apos;inscrire</RegisterLink>
      </Button>
    </div>
  );
}
