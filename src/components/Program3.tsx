import React, { useState } from 'react';

export default function StackOperations() {
  const MAX = 3;
  const [stack, setStack] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState<string | null>(null);

  const push = (item: number) => {
    if (stack.length >= MAX) {
      setOutput('Stack overflow');
      return;
    }
    setStack((prev) => [...prev, item]);
  };

  const pop = () => {
    if (stack.length === 0) {
      setOutput('Stack underflow');
      return;
    }
    setStack((prev) => prev.slice(0, -1));
  };

  const checkPalindrome = () => {
    const isPalindrome = stack.join('') === stack.slice().reverse().join('');
    setOutput(isPalindrome ? 'It is a palindrome' : 'It is not a palindrome');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Stack Operations</h1>
          <p className="text-gray-300">This program demonstrates stack operations, including push, pop, and palindrome checking.</p>
          <div className="mt-6 space-y-4">
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button
              onClick={() => push(Number(inputValue))}
              className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Push
            </button>
            <button
              onClick={pop}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Pop
            </button>
            <button
              onClick={checkPalindrome}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Check Palindrome
            </button>
          </div>
          <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
            <h3 className="font-semibold">Stack Content:</h3>
            <p className="text-lg mt-2">{stack.length > 0 ? stack.join(' | ') : 'Stack is empty'}</p>
          </div>
          {output && (
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <h3 className="font-semibold">Output:</h3>
              <p className="text-lg mt-2">{output}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

