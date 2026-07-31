import React from 'react';

export const LanPhoneConnectionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -56.05 640 568.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M495.5-49c-9.4 9.4-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96-96c-9.4-9.4-24.6-9.4-33.9 0M224.7 25c-7.9-18.9-28.5-28.9-48.1-23.6L171 2.9C106.4 20.5 51.2 83.1 67.3 159.3c37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2c-70.2-34.9-126.8-93.3-159.3-165l44.1-36.1c13.9-11.3 18.6-30.4 11.8-47zm176.8 54c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l96 96c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm131 1a36 36 0 1 0-72 0 36 36 0 1 0 72 0m-164 164a36 36 0 1 0 0-72 36 36 0 1 0 0 72"})
);

export default LanPhoneConnectionSolid;
