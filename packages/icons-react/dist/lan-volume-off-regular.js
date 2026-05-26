import React from 'react';

export const LanVolumeOffRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M227.7 42.3c6.6-6.6 15.6-10.3 25-10.3 19.5 0 35.3 15.8 35.3 35.3v377.4c0 19.5-15.8 35.3-35.3 35.3-9.4 0-18.3-3.7-25-10.3L110.1 352H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48h62.1L227.8 42.3zM240 97.9 137 201c-4.5 4.5-10.6 7-17 7H48v96h72c6.4 0 12.5 2.5 17 7l103 103z"})
);

export default LanVolumeOffRegular;
