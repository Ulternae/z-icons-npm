import React from 'react';

export function LanLaptopFileRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 64c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v48h48V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v160H25.6C11.5 224 0 235.5 0 249.6 0 306.2 45.8 352 102.4 352H240v-48H102.4c-22.1 0-41.1-13.1-49.6-32H240v-48H112zm304 144v48c0 17.7 14.3 32 32 32h48v176H336V208zm-80-48c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V275.9c0-12.7-5.1-24.9-14.1-33.9L462 174.1c-9-9-21.2-14.1-33.9-14.1z"})
  );
}

export default LanLaptopFileRegular;
