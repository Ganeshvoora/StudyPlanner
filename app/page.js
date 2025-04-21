"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      title: "Task Management",
      description: "Organize and prioritize your assignments, readings, and exams.",
      icon: "📝",
      path: "/tasks"
    },
    {
      title: "Calendar Planning",
      description: "Visualize your study schedule and plan ahead for important dates.",
      icon: "📅",
      path: "/calendar"
    },
    {
      title: "Dashboard Analytics",
      description: "Track your progress and study habits with intuitive visualizations.",
      icon: "📊",
      path: "/dashboard"
    },
    {
      title: "Customizable Settings",
      description: "Personalize your study planner to match your learning style.",
      icon: "⚙️",
      path: "/settings"
    }
  ];

  const mainNavItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Tasks", path: "/tasks" },
    { name: "Calendar", path: "/calendar" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  StudyPlanner
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/dashboard">
                <button className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="sr-only">Open menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </nav>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
                Master Your <span className="text-blue-300">Academic</span> Journey
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                Plan, organize, and excel in your studies with our comprehensive study planning tool.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                    Start Planning Now
                  </button>
                </Link>
                <Link href="/tasks">
                  <button className="px-8 py-4 bg-blue-700 text-white border border-blue-400 rounded-lg font-medium text-lg hover:bg-blue-800 transition-all duration-200">
                    Explore Features
                  </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-white/20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-lg">This Week&apos;s Schedule</h3>
                  <span className="text-xs text-blue-200">3 Tasks Due</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-green-500/20 mr-3">{features[0].icon}</div>
                      <div>
                        <p className="font-medium">Math Assignment</p>
                        <p className="text-xs text-blue-200">Due Tomorrow</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-500/20 mr-3">{features[1].icon}</div>
                      <div>
                        <p className="font-medium">Study Group</p>
                        <p className="text-xs text-blue-200">Wed, 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 border border-white/10">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-purple-500/20 mr-3">{features[2].icon}</div>
                      <div>
                        <p className="font-medium">Project Deadline</p>
                        <p className="text-xs text-blue-200">Fri, 11:59 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/calendar">
                    <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors">
                      View Full Schedule
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Features Designed for Students</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Everything you need to organize your academic life in one place
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-md transition-all hover:shadow-lg">
              <div className="p-8">
                <div className="flex flex-col space-y-6">
                  {features.slice(0, 2).map((feature, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        activeFeature === index 
                          ? "bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500" 
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start">
                        <div className="text-3xl p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4">{feature.icon}</div>
                        <div>
                          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-md transition-all hover:shadow-lg">
              <div className="p-8">
                <div className="flex flex-col space-y-6">
                  {features.slice(2, 4).map((feature, index) => (
                    <div 
                      key={index+2}
                      className={`p-6 rounded-xl cursor-pointer transition-all ${
                        activeFeature === index+2 
                          ? "bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500" 
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => setActiveFeature(index+2)}
                    >
                      <div className="flex items-start">
                        <div className="text-3xl p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg mr-4">{feature.icon}</div>
                        <div>
                          <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Quick Access</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Jump right into what you need</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Link href={feature.path} key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700">
                  <div className="inline-flex items-center justify-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full mb-4">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{feature.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none">
            <rect opacity="0.3" x="0" y="0" width="100%" height="100%" fill="white"/>
            <path d="M0 40 L100 0 L100 20 L0 60 Z" fill="white"/>
            <path d="M0 80 L100 40 L100 60 L0 100 Z" fill="white"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Study Habits?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have improved their academic performance and reduced stress with our study planner.
          </p>
          <Link href="/dashboard">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all">
              Start Your Journey Today
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-white text-lg mb-4">Features</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index}>
                    <Link href={feature.path} className="text-gray-400 hover:text-white transition-colors">
                      {feature.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-gray-400 hover:text-white transition-colors">
                    Study Guides
                  </Link>
                </li>
                <li>
                  <Link href="/tips" className="text-gray-400 hover:text-white transition-colors">
                    Study Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-4">About</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} StudyPlanner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
