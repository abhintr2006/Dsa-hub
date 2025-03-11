import React, { useState } from 'react';

export default function Program2() {
  const [mainString, setMainString] = useState('');
  const [pattern, setPattern] = useState('');
  const [replacement, setReplacement] = useState('');
  const [output, setOutput] = useState<string | null>(null);

  const handleReplace = () => {
    if (mainString.includes(pattern)) {
      const replacedString = mainString.replace(new RegExp(pattern, 'g'), replacement);
      setOutput(replacedString);
    } else {
      setOutput('Pattern string is not found');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Program 2: String Operations</h1>
          <p className="text-gray-300">This program demonstrates basic string operations like pattern matching and replacement.</p>
          
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium">Main String:</label>
              <input
                type="text"
                value={mainString}
                onChange={(e) => setMainString(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Pattern String:</label>
              <input
                type="text"
                value={pattern}
                onChange={(e) => setPattern(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Replacement String:</label>
              <input
                type="text"
                value={replacement}
                onChange={(e) => setReplacement(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
            <button
              onClick={handleReplace}
              className="w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              Perform Replacement
            </button>
          </div>
          
          {output !== null && (
            <div className="mt-6 p-4 bg-gray-700/30 rounded-lg">
              <h3 className="font-semibold">Output:</h3>
              <p className="text-lg mt-2">{output}</p>
            </div>
          )}

          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">C Program Code</h2>
            <pre className="bg-gray-900/50 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{`#include<stdio.h>
char str[50], pat[20], rep[20], res[50];
int c = 0, m = 0, i = 0, j = 0, k, flag = 0;
void stringmatch()
{
    while (str[c] != '\0')
    {
        if (str[m] == pat[i])
        {
            i++;
            m++;
            if (pat[i] == '\0')
            {
                flag = 1;
                for (k = 0; rep[k] != '\0'; k++, j++)
                {
                    res[j] = rep[k];
                }
                i = 0;
                c = m;
            }
        }
        else
        {
            res[j] = str[c];
            j++;
            c++;
            m = c;
            i = 0;
        }
    }
    res[j] = '\0';
}
void main()
{
    printf("Enter the main string:");
    gets(str);
    printf("\nEnter the pat string:");
    gets(pat);
    printf("\nEnter the replace string:");
    gets(rep);
    printf("\nThe string before pattern match is:\n %s", str);
    stringmatch();
    if (flag == 1)
        printf("\nThe string after pattern match and replace is: \n %s ", res);
    else
        printf("\nPattern string is not found");
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
