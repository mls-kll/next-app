import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>MAIN</h1>
      <div>
        <ul>
          <li>
            <Link href="/projects/project-1">Project 1</Link>
          </li>
          <li>
            <Link href="/projects/project-2">Project 2</Link>
          </li>
          <li>
            <Link href="/projects/project-3">Project 3</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
