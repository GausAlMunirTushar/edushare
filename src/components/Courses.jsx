import React from 'react'
import CourseCard from './CourseCard'

const Courses = () => {
  return (
    <div className="container mx-auto">
        <div className="flex justify-between">
            <h1 className="text-3xl font-bold ">How our online public school works </h1>
            <button className="border border-tertiary px-4 py-2 text-tertiary rounded-lg">View all courses</button>
        </div>
        <div className="grid grid-cols-4 py-10">
            <CourseCard/>
        </div>
    </div>
  )
}

export default Courses