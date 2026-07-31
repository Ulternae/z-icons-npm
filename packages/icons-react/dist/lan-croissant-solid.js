import React from 'react';

export const LanCroissantSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M243.2.3c4.2-.2 8.5-.3 12.8-.3 62.1 0 118.9 22.1 163.3 58.8L314.6 163.4zM194 7.6l106.1 242.2c4.4 10.1 2.2 22-5.6 29.8L281 293c-8.2 8.2-20.7 10.2-31.1 5L12 178.3C38.8 94.2 107.7 29 194 7.6M1.6 226.8l166 83.6L58.7 419.3C22.1 374.9 0 318.1 0 256c0-9.9.6-19.6 1.6-29.2m91.1 226.4 120.1-120.1 11.2 5.6v135.1c0 19.2-17 34.3-35.5 29.2-35.6-9.7-68.1-26.9-95.7-49.8zM341.2 224l-5.9-13.4L453.2 92.7c22.9 27.6 40.1 60.1 49.8 95.7 5.1 18.6-10 35.5-29.2 35.5H341.2z"})
);

export default LanCroissantSolid;
