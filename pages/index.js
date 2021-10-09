import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a heref>About</a>
      </Link>
      ,
      <Link href="/games">
        <a heref>Games</a>
      </Link>
      ,
      <Link heref="/forms">
        <a heref>Forms</a>
      </Link>
    </div>
  );
}
