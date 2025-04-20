"use client";
import React from 'react'

export default function Dashboard(){
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-2">Tasks Completed</h3>
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm opacity-70">This week</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-2">Study Hours</h3>
            <p className="text-3xl font-bold">24.5</p>
            <p className="text-sm opacity-70">This week</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-2">Upcoming Deadlines</h3>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm opacity-70">Next 7 days</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Completed Math Assignment</p>
                  <p className="text-sm opacity-70">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Started Study Session</p>
                  <p className="text-sm opacity-70">Yesterday</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <div>
                  <p className="font-medium">Added New Task</p>
                  <p className="text-sm opacity-70">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                + Add New Task
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                + Schedule Study Session
              </button>
              <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                + Create Study Group
              </button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                <p className="font-medium">Physics Exam</p>
                <p className="text-sm opacity-70">Tomorrow, 10:00 AM</p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-md">
                <p className="font-medium">Study Group Meeting</p>
                <p className="text-sm opacity-70">Wed, 3:00 PM</p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-md">
                <p className="font-medium">Project Deadline</p>
                <p className="text-sm opacity-70">Fri, 11:59 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}