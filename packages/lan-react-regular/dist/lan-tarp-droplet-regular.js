import React from 'react';

export function LanTarpDropletRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 160c35.3 0 64-26.9 64-60 0-24-33.7-70.1-52.2-93.5-6.1-7.7-17.5-7.7-23.6 0C225.7 29.9 192 76 192 100c0 33.1 28.7 60 64 60m112-64c0 5.4-.4 10.8-1.1 16H448c8.8 0 16 7.2 16 16v112h-88c-39.8 0-72 32.2-72 72v88H64c-8.8 0-16-7.2-16-16V128c0-8.8 7.2-16 16-16h81.1c-.7-5.2-1.1-10.6-1.1-16 0-11.1 1.6-21.9 4.6-32H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h261.5c17 0 33.3-6.7 45.3-18.7l122.5-122.6c12-12 18.7-28.3 18.7-45.3V128c0-35.3-28.7-64-64-64h-84.6c3 10.1 4.6 20.9 4.6 32m76.1 192L352 380.1V312c0-13.3 10.7-24 24-24zM128 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanTarpDropletRegular;
