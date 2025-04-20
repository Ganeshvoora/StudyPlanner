"use client";
import React from 'react'

export default function Tasks(){
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Tasks & Assignments</h1>

        {/* Task Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg">
            <h2 className="font-bold mb-3">Upcoming</h2>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                <p className="font-medium">Math Assignment</p>
                <p className="text-sm opacity-70">Due Tomorrow</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                <p className="font-medium">Physics Lab Report</p>
                <p className="text-sm opacity-70">Due in 3 days</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
            <h2 className="font-bold mb-3">In Progress</h2>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                <p className="font-medium">Literature Review</p>
                <p className="text-sm opacity-70">50% Complete</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                <p className="font-medium">Research Paper</p>
                <p className="text-sm opacity-70">75% Complete</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg">
            <h2 className="font-bold mb-3">Completed</h2>
            <div className="space-y-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                <p className="font-medium">Chemistry Quiz</p>
                <p className="text-sm opacity-70">Submitted Yesterday</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-sm">
                <p className="font-medium">History Essay</p>
                <p className="text-sm opacity-70">Submitted 2 days ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Task Button */}
        <div className="mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
            + Add New Task
          </button>
        </div>

        {/* Task List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">All Tasks</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((task) => (
                <div 
                  key={task}
                  className="border-b dark:border-gray-700 last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Task {task}</h3>
                      <p className="text-sm opacity-70">Due in {task} days</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-blue-600 hover:text-blue-700">Edit</button>
                      <button className="text-red-600 hover:text-red-700">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

