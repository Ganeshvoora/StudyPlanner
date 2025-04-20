"use client";
import React from 'react'

export default function Calendar(){
  return (
    <div>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Calendar</h1>
        
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-medium p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }).map((_, index) => {
            const day = index + 1;
            return (
              <div
                key={index}
                className="aspect-square border rounded-lg p-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 cursor-pointer"
                style={{
                  animation: `fadeIn 0.3s ease-out ${index * 0.02}s forwards`,
                  opacity: 0
                }}
              >
                <span className="font-medium">{day <= 31 ? day : ''}</span>
                {day <= 31 && (
                  <div className="mt-1 text-xs space-y-1">
                    {day === 15 && (
                      <div className="bg-blue-100 dark:bg-blue-900/50 p-1 rounded text-xs">
                        Exam Prep
                      </div>
                    )}
                    {day === 20 && (
                      <div className="bg-green-100 dark:bg-green-900/50 p-1 rounded text-xs">
                        Study Group
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  )
}

