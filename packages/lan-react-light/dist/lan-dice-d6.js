import React from 'react';

export function LanDiceD6({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -6.2 512 524.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216.8 4.3c24.6-14 54.8-14 79.3 0l160 91.4c23.4 13.3 38.3 37.5 40.1 64.1l.2 5.4v181.7c0 28.7-15.4 55.2-40.3 69.5l-160 91.4c-24.6 14-54.8 14-79.3 0l-160-91.4c-24.9-14.2-40.3-40.7-40.3-69.4V165.2c0-28.7 15.4-55.2 40.3-69.4l160-91.4zM49.4 156.1c-.6 3-.9 6-.9 9.1V347c0 17.2 9.3 33.1 24.2 41.7l160 91.4c2.5 1.4 5.2 2.5 7.8 3.5V265.4L49.4 156.2zm223 109.2v218.2c2.7-.9 5.3-2 7.8-3.5l160-91.4c15-8.5 24.2-24.5 24.2-41.7V165.2l-.4-6.4c-.1-.9-.4-1.8-.5-2.7zM280.3 32c-14.8-8.4-32.9-8.4-47.7 0l-160 91.4c-2.6 1.5-4.9 3.2-7.1 5.1l191 109.1 190.9-109.1c-2.2-1.9-4.5-3.6-7.1-5z"})
  );
}

export default LanDiceD6;
