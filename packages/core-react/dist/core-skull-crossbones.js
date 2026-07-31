import React from 'react';

export function CoreSkullCrossbones({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 584.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m339.2 226.7 45.3-45.3v-21.5c0-70.7-57.3-128-128-128s-128 57.3-128 128v21.5l64 64v42.5h128v-42.5zM64.5 185.5V160c0-106 86-192 192-192s192 86 192 192v25.5c0 14.4-5.7 28.2-15.9 38.4L384.5 272v16c0 35.3-28.7 64-64 64h-128c-35.3 0-64-28.7-64-64v-16l-48.1-48.1c-10.2-10.2-15.9-24-15.9-38.4m-20.2 158 30.4 10.1 181.9 60.6 181.9-60.6 30.4-10.1 20.2 60.7c-8.5 2.8-52.2 17.4-131.3 43.8 79 26.3 122.8 40.9 131.3 43.8l-20.2 60.7-30.4-10.1-181.9-60.6-181.9 60.6-30.4 10.1-20.2-60.7c8.5-2.8 52.2-17.4 131.3-43.8-79.1-26.4-122.8-40.9-131.3-43.8zM176.5 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default CoreSkullCrossbones;
