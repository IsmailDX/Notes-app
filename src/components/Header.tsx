import { shadow } from "@/styles/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogOutButton from "./LogOutButton";
import { getUser } from "@/auth/server";
import { SidebarTrigger } from "./ui/sidebar";

async function Header() {
  const user = await getUser();
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <SidebarTrigger className="absolute top-9 left-2" />
      <Link href="/" className="ml-9 flex items-end gap-2 md:ml-4">
        <Image
          src="/goatius.png"
          alt="logo"
          height={60}
          width={60}
          className="rounded-full"
          priority
        />

        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          Notes <span>App</span>
        </h1>
      </Link>

      <div className="flex gap-4">
        {user ? (
          <LogOutButton />
        ) : (
          <>
            <Button className="hidden sm:block" asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
          </>
        )}
        <DarkModeToggle />
      </div>
    </header>
  );
}

export default Header;
