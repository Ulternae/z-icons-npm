import React from 'react';

export const NeoSignalBarsWeak = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 616 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M21.3 331.9C38.8 313 63.5 308 88 308h20c24.5 0 49.2 5 66.7 23.9 16.9 18.3 21.3 43.6 21.3 69.5v9.3c0 25.8-4.4 51.2-21.3 69.5-17.5 18.9-42.2 23.9-66.7 23.9H88c-24.5-.1-49.2-5.1-66.7-24C4.4 461.8 0 436.5 0 410.7v-9.3c0-25.8 4.4-51.2 21.3-69.5m41.1 38c-2.3 2.5-6.4 9.8-6.4 31.4v9.3c0 21.6 4.1 29 6.4 31.4 1.8 1.9 7.1 5.9 25.6 5.9h20c18.5 0 23.8-4 25.6-5.9 2.3-2.5 6.4-9.8 6.4-31.4v-9.3c0-21.6-4.1-29-6.4-31.4-1.8-1.9-7.1-5.9-25.6-5.9H88c-18.5 0-23.8 4-25.6 5.9"})
);

export default NeoSignalBarsWeak;
