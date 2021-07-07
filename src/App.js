/* eslint-disable import/no-anonymous-default-export */
// App.js
import React from 'react';
// import Accordian from './components/Accordian';
import Search from './components/Search';
// const items = [
//   {
//     title: 'What is React?',
//     content: 'React is a frontend javascript libraly',
//   },
//   {
//     title: 'What use React?',
//     content: 'React is a famous javascript libraly among engineers',
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React by creating components',
//   },
// ];

export default () => {
  return (
    <div>
      {/* <Accordian items={items} /> */}
      <Search />
    </div>
  );
};
