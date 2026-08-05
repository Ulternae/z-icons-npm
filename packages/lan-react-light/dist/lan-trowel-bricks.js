import React from 'react';

export function LanTrowelBricks({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M175.9 16.2 31.6 100.4c-21.2 12.3-21.2 42.9 0 55.3l144.2 84.1c21.3 12.4 48.1-2.9 48.1-27.6v-68.1h272c8.8 0 16-7.2 16-16s-7.2-16-16-16h-272V44c0-24.7-26.8-40.1-48.1-27.6zM192 43.9v168.2L47.8 128zM288 384h192v80c0 8.8-7.2 16-16 16H256v-96zm-64 0v96H48c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16zm256-32H320v-80c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16zm-192-80v80H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48"})
  );
}

export default LanTrowelBricks;
