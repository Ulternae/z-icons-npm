import React from 'react';

export const LanOctagonExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M330.9.1c12.7 0 25 5.1 34 14.1l133.4 133.4c9 9 14.1 21.2 14.1 33.9v148.8c0 12.7-5.1 25-14.1 34L364.8 497.9c-9 9-21.2 14.1-34 14.1H182c-12.7 0-24.9-5.1-33.9-14.1L14.6 364.4c-9-9-14.1-21.2-14.1-34V181.6c0-12.7 5.1-24.9 14.1-33.9L148.1 14.1c9-9 21.2-14.1 33.9-14.1h148.8zM48.5 181.6v148.8L182 463.9h148.8l133.5-133.5V181.6L330.8 48.1H182zM256.4 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0-256c18.2 0 32.7 15.5 31.4 33.7l-7.4 104c-.9 12.6-11.4 22.3-23.9 22.3-12.6 0-23-9.7-23.9-22.3l-7.4-104c-1.3-18.2 13.1-33.7 31.4-33.7z"})
);

export default LanOctagonExclamationRegular;
