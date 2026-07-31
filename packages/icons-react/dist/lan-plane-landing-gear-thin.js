import React from 'react';

export const LanPlaneLandingGearThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M592.2 328.5c.1-21.9-17.7-39.8-39.6-39.8l-127.5-.2c-2.2 0-4.4-.9-5.9-2.6L244.5 96H179l58.1 181.7c.8 2.4.3 5.1-1.2 7.2s-3.9 3.3-6.5 3.3L136 288c-2.8 0-5.2-1.4-6.6-3.6L68.2 208H34.9l38.5 121c7.4 23.2 29 39 53.4 39h425.7c21.9 0 39.6-17.7 39.7-39.5m-39.6-55.8c30.8 0 55.7 25.1 55.6 55.9-.1 30.7-25 55.5-55.7 55.5H126.8c-31.4 0-59.1-20.3-68.6-50.2L16.4 202.4c-.8-2.4-.3-5.1 1.2-7.1s3.8-3.3 6.4-3.3h48c2.4 0 4.7 1.1 6.2 3l61.6 77.1 78.6.1-58.2-181.7c-.8-2.4-.3-5.1 1.2-7.2s4-3.3 6.6-3.3h80c2.2 0 4.4.9 5.9 2.6l174.7 189.9zM256 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-48a32 32 0 1 1 0 64 32 32 0 1 1 0-64m176 32a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanPlaneLandingGearThin;
