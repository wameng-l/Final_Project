import Link from "next/link"

const SideBar = () => {
  return (
    <div>
      <div className="h-screen w-60 bg-slate-400 flex flex-col text-center">
        <h1 className="text-6xl font-bold mb-20">LOGO</h1>
        <Link href={'/'} className="p-6 border-solid border-[1px]">Home</Link>
        <Link href={'/Product'} className="p-6 border-solid border-[1px]">Product</Link>
        <Link href={'/TopUP'} className="p-6 border-solid border-[1px]">TopUP</Link>
        <Link href={'/Profile'} className="p-6 border-solid border-[1px]">Profile</Link>
      </div>
    </div>
  )
}
export default SideBar