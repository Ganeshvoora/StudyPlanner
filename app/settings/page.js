"use client";
import React, { useState } from 'react'

export default function Settings(){
  // State for toggle settings
  const [darkMode, setDarkMode] = useState(false);
  const [taskReminders, setTaskReminders] = useState(true);
  const [studyAlerts, setStudyAlerts] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [selectedColor, setSelectedColor] = useState('blue');

  // Toggle functions
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleTaskReminders = () => setTaskReminders(!taskReminders);
  const toggleStudyAlerts = () => setStudyAlerts(!studyAlerts);
  const toggleEmailNotifications = () => setEmailNotifications(!emailNotifications);

  return (
    <div>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="space-y-8">
          {/* Theme Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Theme Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm opacity-70">Switch between light and dark themes</p>
                </div>
                <button 
                  onClick={toggleDarkMode}
                  className={`w-12 h-6 ${darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'} rounded-full relative transition-colors duration-300`}
                >
                  <div 
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transform transition-transform duration-300 ${darkMode ? 'translate-x-7' : 'translate-x-1'}`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Color Scheme</p>
                  <p className="text-sm opacity-70">Choose your preferred accent color</p>
                </div>
                <div className="flex gap-2">
                  {['blue', 'purple', 'green', 'red'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-6 h-6 rounded-full bg-${color}-500 hover:ring-2 transition-all duration-200 ${selectedColor === color ? 'ring-2 ring-offset-2' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Task Reminders</p>
                  <p className="text-sm opacity-70">Get notified about upcoming tasks</p>
                </div>
                <button 
                  onClick={toggleTaskReminders}
                  className={`w-12 h-6 ${taskReminders ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'} rounded-full relative transition-colors duration-300`}
                >
                  <div 
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transform transition-transform duration-300 ${taskReminders ? 'translate-x-7' : 'translate-x-1'}`}
                  ></div>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Study Session Alerts</p>
                  <p className="text-sm opacity-70">Receive alerts before scheduled study sessions</p>
                </div>
                <button 
                  onClick={toggleStudyAlerts}
                  className={`w-12 h-6 ${studyAlerts ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'} rounded-full relative transition-colors duration-300`}
                >
                  <div 
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transform transition-transform duration-300 ${studyAlerts ? 'translate-x-7' : 'translate-x-1'}`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Account</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm opacity-70">Manage email preferences</p>
                </div>
                <button 
                  onClick={toggleEmailNotifications}
                  className={`w-12 h-6 ${emailNotifications ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'} rounded-full relative transition-colors duration-300`}
                >
                  <div 
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transform transition-transform duration-300 ${emailNotifications ? 'translate-x-7' : 'translate-x-1'}`}
                  ></div>
                </button>
              </div>

              <button className="text-red-600 hover:text-red-700 font-medium hover:underline transition-all duration-200">
                Delete Account
              </button>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 active:shadow-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

