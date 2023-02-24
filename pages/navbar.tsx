import Link from 'next/link'
export default function navbar() {
  return (
    <div>
        <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
    </div>
  )
}
