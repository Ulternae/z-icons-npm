import React from 'react';

export const LanWineGlassAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0c-3.5 0-6.6 2.3-7.7 5.7L6.7 168.9C2.3 183.4 0 198.5 0 213.8c0 84.4 67.8 153 152 154.2v160H64c-4.4 0-8 3.6-8 8s3.6 8 8 8h192c4.4 0 8-3.6 8-8s-3.6-8-8-8h-88V368c84.2-1.2 152-69.8 152-154.2 0-15.2-2.3-30.4-6.7-44.9L263.7 5.7c-1-3.4-4.1-5.7-7.7-5.7zM22 173.5 69.9 16h180.2L298 173.5c4 13 6 26.6 6 40.2 0 76.3-61.9 138.2-138.2 138.2h-11.5C78 351.9 16.1 290 16.1 213.7c0-13.6 2-27.2 6-40.2z"})
);

export default LanWineGlassAltThin;
