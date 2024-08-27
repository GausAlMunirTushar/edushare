import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
        <div>
            <Image src="/logo.svg" alt="logo" width={140} height={40} />
        </div>
        <div>
            <ul className="flex gap-8">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Profile</Link></li>
                <li><Link href="#">Courses</Link></li>
                <li><Link href="#">Contact</Link></li>
            </ul>
        </div>
        <button className="bg-[#E8F1FF] px-4 py-2 text-tertiary rounded-lg font-bold">Sign in</button>
    </div>
  )
}

export default Header