import React from 'react';

export const LanOctagonExclamation = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M330.9.1c12.7 0 25 5.1 34 14.1l133.4 133.4c9 9 14.1 21.2 14.1 33.9v148.8c0 12.7-5.1 25-14.1 34L364.8 497.9c-9 9-21.2 14.1-34 14.1H182c-12.7 0-24.9-5.1-33.9-14.1L14.6 364.4c-9-9-14.1-21.2-14.1-34V181.6c0-12.7 5.1-24.9 14.1-33.9L148.1 14.1c9-9 21.2-14.1 33.9-14.1h148.8zM182 32.1c-4.2 0-8.3 1.7-11.3 4.7L37.2 170.3c-3 3-4.7 7.1-4.7 11.3v148.8c0 4.2 1.7 8.3 4.7 11.3l133.5 133.6c3 3 7.1 4.7 11.3 4.7h148.8c4.2 0 8.3-1.7 11.3-4.7l133.6-133.6c3-3 4.7-7.1 4.7-11.3V181.6c0-4.2-1.7-8.3-4.7-11.3L342.2 36.8c-3-3-7.1-4.7-11.3-4.7zM256.4 384a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0-256c13.5 0 24.3 11.4 23.5 24.9l-7.6 136c-.5 8.5-7.5 15.1-16 15.1s-15.5-6.6-16-15.1l-7.6-136c-.8-13.5 10-24.9 23.5-24.9z"})
);

export default LanOctagonExclamation;
