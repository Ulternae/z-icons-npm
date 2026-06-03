import React from 'react';

export const LanUserShield = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 128a96 96 0 1 1 192 0 96 96 0 1 1-192 0m224 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M32 480c0-79.5 64.5-144 144-144h64v-10.7c0-7.3 1-14.5 2.9-21.3H176C78.8 304 0 382.8 0 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16zm288-152.8 96-32V505l-4.1-1.9c-56.1-26.5-91.9-82.9-91.9-144.9v-31.1zm112 184.9c-.3 0-.6 0-.8-.1h1.7c-.3.1-.6.1-.8.1zm20.1-9.1-4.1 1.9V295.1l96 32v31.1c0 62-35.8 118.4-91.9 144.8m-35.4 37.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2v-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4v31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7z"})
);

export default LanUserShield;
