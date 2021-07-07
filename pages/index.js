import { useState } from 'react';
import Head from 'next/head'

const MONTHS = {
  '1': 'January',
  '2': 'February',
  '3': 'March',
  '4': 'April',
  '5': 'May',
  '6': 'June',
  '7': 'July',
  '8': 'August',
  '9': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
}
export default function Home() {
  const [fortunesList, setFortunesList] = useState([
      {
        "text": "Today it's up to you to create the peacefulness you long for.",
        "date": "2021-07-06T22:55:00.037Z"
      },
      {
        "text": "If you refuse to accept anything but the best, you very often get it.",
        "date": "2021-07-15T15:14:10.890Z"
      },
      {
        "text": "A smile is your passport into the hearts of others.",
        "date": "2021-07-24T07:33:21.743Z"
      },
      {
        "text": "A good way to keep healthy is to eat more Chinese food.",
        "date": "2021-08-01T23:52:32.596Z"
      },
      {
        "text": "Your high-minded principles spell success.",
        "date": "2021-08-10T16:11:43.449Z"
      },
      {
        "text": "Hard work pays off in the future, laziness pays off now.",
        "date": "2021-08-19T08:30:54.302Z"
      },
      {
        "text": "Change can hurt, but it leads a path to something better.",
        "date": "2021-08-28T00:50:05.155Z"
      },
      {
        "text": "Enjoy the good luck a companion brings you.",
        "date": "2021-09-05T17:09:16.008Z"
      },
      {
        "text": "People are naturally attracted to you.",
        "date": "2021-09-14T09:28:26.861Z"
      },
      {
        "text": "Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.",
        "date": "2021-09-23T01:47:37.714Z"
      },
      {
        "text": "A chance meeting opens new doors to success and friendship.",
        "date": "2021-10-01T18:06:48.567Z"
      },
      {
        "text": "You learn from your mistakes... You will learn a lot today.",
        "date": "2021-10-10T10:25:59.420Z"
      },
      {
        "text": "If you have something good in your life, don't let it go!",
        "date": "2021-10-19T02:45:10.273Z"
      },
      {
        "text": "What ever your goal is in life, embrace it, visualize it, and for sure, it will be yours.",
        "date": "2021-10-27T19:04:21.126Z"
      },
      {
        "text": "Your shoes will make you happy today.",
        "date": "2021-11-05T11:23:31.979Z"
      },
      {
        "text": "You cannot love life until you live the life you love.",
        "date": "2021-11-14T03:42:42.832Z"
      }
    ]);
  return (
    <div className="p-6">
      <Head>
        <title>My Fortunes</title>
      </Head>
      <main className="w-full">
        <p className="font-roboto font-bold tracking-tight text-3xl mt-10">
          My Fortunes
        </p>
        <div class="flex flex-wrap overflow-hidden sm:-mx-1">
          {
            fortunesList.map((fortune, i) => {
              const isFullWidth = i === 0 || ((i - 1) % 5) === 0;
              const colors = [
                'custom-blue',
                'custom-purple',
                'custom-green',
                'custom-dark-blue',
                'custom-dark-purple',
                'custom-light-blue'
              ];

              const random = Math.floor(Math.random() * Object.keys(colors).length);
              const color = colors[random];
              return (
                <div className={`${isFullWidth ? 'w-full' : 'w-1/2'} overflow-hidden my-1 px-1`}>
                  <div className={`${isFullWidth ? 'aspect-w-16 aspect-h-7' : 'aspect-w-1 aspect-h-1'} bg-${color} rounded-lg`}>
                    <div className="w-full h-full p-10 flex flex-col justify-between items-start">
                      <p className="text-white font-roboto font-bold text-base">
                        {fortune.text}
                      </p>

                      <p className="p-2 bg-white bg-opacity-10 flex rounded-lg text-white text-sm">
                        {`${MONTHS[new Date(fortune.date).getMonth() + '']} ${new Date(fortune.date).getDay()}, ${new Date(fortune.date).getFullYear()}`}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </main>
    </div>
  )
}
