import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Day {
  dayName: string;
  date: number;
  activity: string;
}

export default function Program1() {
  const [days, setDays] = useState<Day[]>([]);
  const [numDays, setNumDays] = useState<number>(7);
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [showOutput, setShowOutput] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newDay: Day = {
      dayName: formData.get('dayName') as string,
      date: parseInt(formData.get('date') as string),
      activity: formData.get('activity') as string,
    };

    setDays(prev => [...prev, newDay]);
    setCurrentDay(prev => prev + 1);

    if (currentDay + 1 === numDays) {
      setShowOutput(true);
    }

    e.currentTarget.reset();
  };

  const resetProgram = () => {
    setDays([]);
    setCurrentDay(0);
    setShowOutput(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.history.back();
              }}
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </a>
            <h1 className="text-2xl font-bold">Program 1: Calendar Program</h1>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Program Description</h2>
              <p>This program demonstrates a basic implementation of a Calendar where you can input activities for different days of the week.</p>
            </div>

            {!showOutput && (
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Enter details for Day {currentDay + 1}:
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="dayName" className="block text-sm font-medium mb-1">
                      Day Name
                    </label>
                    <input
                      type="text"
                      id="dayName"
                      name="dayName"
                      required
                      className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      Date
                    </label>
                    <input
                      type="number"
                      id="date"
                      name="date"
                      required
                      min="1"
                      max="31"
                      className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="activity" className="block text-sm font-medium mb-1">
                      Activity
                    </label>
                    <input
                      type="text"
                      id="activity"
                      name="activity"
                      required
                      className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Submit Day {currentDay + 1}
                  </button>
                </form>
              </div>
            )}

            {showOutput && (
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Week's Activity Details:</h3>
                <div className="space-y-4">
                  {days.map((day, index) => (
                    <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                      <h4 className="font-medium">Day {index + 1}:</h4>
                      <p>Day Name: {day.dayName}</p>
                      <p>Date: {day.date}</p>
                      <p>Activity: {day.activity}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={resetProgram}
                  className="mt-6 w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start Over
                </button>
              </div>
            )}

            <div className="bg-gray-800/50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Program Code</h2>
              <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`#include<stdio.h>
#include<stdlib.h>
struct Day {
    char *dayName;
    int date;
    char *activity;
};

void create(struct Day *day) {
    day->dayName = (char *)malloc(sizeof(char) * 20);
    day->activity = (char *)malloc(sizeof(char) * 100);
    printf("Enter the day name: ");
    scanf("%s", day->dayName);
    printf("Enter the date: ");
    scanf("%d", &day->date);
    printf("Enter the activity for the day: ");
    scanf(" %[^\\n]s", day->activity);
}

void read(struct Day *calendar, int size) {
    for (int i = 0; i < size; i++) {
        printf("Enter details for Day %d:\\n", i + 1);
        create(&calendar[i]);
    }
}

void display(struct Day *calendar, int size) {
    printf("\\nWeek's Activity Details:\\n");
    for (int i = 0; i < size; i++) {
        printf("Day %d:\\n", i + 1);
        printf("Day Name: %s\\n", calendar[i].dayName);
        printf("Date: %d\\n", calendar[i].date);
        printf("Activity: %s\\n", calendar[i].activity);
        printf("\\n");
    }
}

void freeMemory(struct Day *calendar, int size) {
    for (int i = 0; i < size; i++) {
        free(calendar[i].dayName);
        free(calendar[i].activity);
    }
}

int main() {
    int size;
    printf("Enter the number of days in the week: ");
    scanf("%d", &size);
    struct Day *calendar = (struct Day *)malloc(sizeof(struct Day) * size);
    if (calendar == NULL) {
        printf("Memory allocation failed. Exiting program.\\n");
        return 1;
    }
    read(calendar, size);
    display(calendar, size);
    freeMemory(calendar, size);
    free(calendar);
    return 0;
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}