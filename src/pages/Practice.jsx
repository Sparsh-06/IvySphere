import React from 'react';
import { FaGraduationCap } from 'react-icons/fa'; // Icon for added professionalism

// Sample courses data
const courses = [
    { id: 0, name: "Course 1", reward: 1 },
    { id: 1, name: "Course 2", reward: 2 },
    { id: 2, name: "Course 3", reward: 1 },
    { id: 3, name: "Course 4", reward: 2 },
];

const Practice = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800">Available Courses</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course) => (
                    <div 
                        className="card bg-white shadow-xl rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        key={course.id}
                    >
                        <div className="card-body p-6">
                            {/* Course Icon */}
                            <div className="flex items-center justify-center mb-4">
                                <FaGraduationCap className="text-5xl text-blue-500" />
                            </div>
                            {/* Course Name */}
                            <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">{course.name}</h2>
                            {/* Reward Badge */}
                            <div className="flex items-center justify-center mb-6">
                                <span className="badge badge-outline badge-success text-lg px-4 py-2">
                                    {course.reward} GAS
                                </span>
                            </div>
                            {/* Reward Text */}
                            <p className="text-center text-gray-600 font-medium">Reward to complete this course</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Practice;
