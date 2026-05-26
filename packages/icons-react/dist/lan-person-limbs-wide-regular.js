import React from 'react';

export const LanPersonLimbsWideRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112M60 59.2c-11.5-6.6-26.2-2.7-32.8 8.8s-2.7 26.2 8.8 32.8l80.7 46.5c8.8 5.1 17.9 9.5 27.3 13.3v136.3c0 18.1-2.9 36-8.6 53.1-.2.5-15.6 46.7-46.1 138.4-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l38.3-114.9c7.3-21.9 27.8-36.7 50.9-36.7s43.6 14.8 50.9 36.7l38.3 114.9c4.2 12.6 17.8 19.4 30.4 15.2s19.3-17.8 15.1-30.4c-30.6-91.8-46-137.9-46.2-138.4-5.7-17.1-8.6-35.1-8.6-53.1V160.6c9.4-3.8 18.5-8.2 27.3-13.3l80.7-46.5c11.5-6.6 15.4-21.3 8.8-32.8s-21.3-15.4-32.8-8.8l-80.7 46.5C282 120.3 253.3 128 224 128s-58-7.7-83.3-22.3zm196.4 250.1c-10.2-3.4-21.1-5.3-32.4-5.3s-22.1 1.8-32.4 5.3c.2-4.1.4-8.3.4-12.4V173.7c21.1 3.2 42.9 3.2 64 0v123.2c0 4.2.1 8.3.4 12.4"})
);

export default LanPersonLimbsWideRegular;
