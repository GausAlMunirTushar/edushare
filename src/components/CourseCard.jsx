import Image from 'next/image'
import { HiUserGroup } from "react-icons/hi2";
import { IoTime } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div>
        <div>
            <div>
                <Image src="/course-1.png" alt="logo" width={140} height={40} className="w-full"/>
            </div>
            <h2>
            Hands-On Python & R In Data Science
            </h2>
            <div className="flex items-center gap-2">
                <HiUserGroup />
                <p>121212</p>
            </div>
            <div className="flex items-center gap-2">
                <IoTime />
                <p>4 Months</p>
            </div>
            <button className="flex items-center  gap-5  px-8 py-2 text-tertiary border border-tertiary text-md rounded-lg"><FaCartPlus /> Add to Cart</button>
        </div>
    </div>
  )
}

export default CourseCard