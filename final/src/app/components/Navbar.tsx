import Link from "next/link"

const Navbar = () => {
  return (
    <div className="h-14 bg-slate-400 flex justify-end">
      <Link href={'/Login'}>Login</Link>
    </div>
  )
}

export default Navbar