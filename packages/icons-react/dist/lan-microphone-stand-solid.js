import React from 'react';

export const LanMicrophoneStandSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m290.2 52.3-4.6 4.6 169.7 169.7 4.6-4.6c46.9-46.9 46.9-122.8 0-169.7S337 5.5 290.2 52.3m-32.9 33-6.7 6.7c-21.6 21.6-32.5 49.8-32.8 78.1l124.4 124.3c28.3-.3 56.5-11.2 78.1-32.8l6.7-6.6zM192 212.2 38.3 380.4c-17.3 18.9-16.6 48.1 1.5 66.3l25.6 25.7c18.1 18.2 47.4 18.9 66.4 1.6l100.5-91.8V520c0 13.3 10.7 24 24 24s24-10.7 24-24V338.3l19.8-18.1L192 212.1z"})
);

export default LanMicrophoneStandSolid;
