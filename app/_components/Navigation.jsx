import Link from "next/link";
import { auth } from "@/app/api/auth/[...nextauth]/route";

export default async function Navigation() {
  const session = await auth();
  // console.log(user);

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session?.user?.name ? (
            <div className="flex gap-4 items-center">
              <img
                src={session?.user?.image}
                alt="profile"
                style={{ width: "25px", height: "25px", borderRadius: "50%" }}
                referrerPolicy="no-referrer"
              />
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors"
              >
                {session?.user?.name}
              </Link>
            </div>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
