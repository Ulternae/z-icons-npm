import React from 'react';

export const LanStarSharpHalfAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M248 34.4v353.7L109.6 495.7q-.45.3-.9.3c-1 0-1.7-.9-1.4-1.9l52.3-171.8c.9-3.1-.1-6.4-2.5-8.5L17 197.1c-.7-.6-1-1.4-1-2.2 0-1.6 1.3-2.9 2.9-2.9H192c3.5 0 6.6-2.3 7.6-5.6zm16 353.7V34.4l48.4 152c1.1 3.3 4.1 5.6 7.6 5.6h173.1c1.6 0 2.9 1.3 2.9 2.9 0 .9-.4 1.7-1 2.2L354.9 313.9c-2.5 2.1-3.5 5.4-2.5 8.5l52.3 171.8c.3.9-.4 1.9-1.4 1.9q-.45 0-.9-.3zM256 0c-8.2 0-15.5 5.3-18 13.2L186.2 176H18.9C8.5 176 0 184.5 0 194.9c0 5.6 2.5 10.9 6.8 14.5l136 113.3-50.7 166.7c-3.4 11.2 5 22.5 16.7 22.5 3.9 0 7.7-1.3 10.7-3.7L256 402.1l136.5 106.2c3.1 2.4 6.8 3.7 10.7 3.7 11.7 0 20.1-11.3 16.7-22.5l-50.7-166.7 136-113.3c4.3-3.6 6.8-8.9 6.8-14.5 0-10.4-8.5-18.9-18.9-18.9l-167.3-.1L274 13.2C271.5 5.3 264.2 0 256 0"})
);

export default LanStarSharpHalfAltThin;
