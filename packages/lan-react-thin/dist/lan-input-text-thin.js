import React from 'react';

export function LanInputTextThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm16 160v120c0 4.4 3.6 8 8 8s8-3.6 8-8v-72h96v72c0 4.4 3.6 8 8 8s8-3.6 8-8V224c0-35.3-28.7-64-64-64s-64 28.7-64 64m112 32H96v-32c0-26.5 21.5-48 48-48s48 21.5 48 48zm64-88v176c0 4.4 3.6 8 8 8h76c28.7 0 52-23.3 52-52 0-20.3-11.7-37.9-28.7-46.5C375.9 244 384 228.9 384 212c0-28.7-23.3-52-52-52h-68c-4.4 0-8 3.6-8 8m112 44c0 19.9-16.1 36-36 36h-60v-72h60c19.9 0 36 16.1 36 36m-96 124v-72h68c19.9 0 36 16.1 36 36s-16.1 36-36 36z"})
  );
}

export default LanInputTextThin;
