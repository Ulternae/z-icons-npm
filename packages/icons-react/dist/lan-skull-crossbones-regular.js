import React from 'react';

export const LanSkullCrossbonesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.016 0 448.016 544.018',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304.2 210.8c20.4-18 31.8-41.8 31.8-66.8 0-48.4-45.3-96-112-96s-112 47.6-112 96c0 25.1 11.3 48.8 31.8 66.8 10.3 9.1 16.2 22.2 16.2 36V264c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-17.2c0-13.8 5.9-26.9 16.2-36M336 264c0 30.9-25.1 56-56 56H168c-30.9 0-56-25.1-56-56v-17.2C82.4 220.7 64 184.3 64 144 64 64.5 135.6 0 224 0s160 64.5 160 144c0 40.3-18.4 76.7-48 102.8zM2 334.3c5.3-12.1 19.5-17.6 31.6-12.3L224 405.8 414.3 322c12.1-5.3 26.3.2 31.6 12.3s-.2 26.3-12.3 31.6l-150.1 66 150.1 66c12.1 5.3 17.6 19.5 12.3 31.6s-19.5 17.6-31.6 12.3L224 458.2 33.7 542c-12.1 5.3-26.3-.2-31.6-12.3s.2-26.3 12.3-31.6l150.1-66-150.1-66C2.2 360.6-3.3 346.5 2 334.3M144 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m128-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanSkullCrossbonesRegular;
