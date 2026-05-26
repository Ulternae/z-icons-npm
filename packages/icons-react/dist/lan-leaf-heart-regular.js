import React from 'react';

export const LanLeafHeartRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M492.7.5C503.9 2.7 512 12.6 512 24v186.9C512 342.1 403.9 448 273.2 448c-81.5 0-151.2-55.6-171.4-131.2C68.7 347.5 48 391.3 48 440v16c0 13.3-10.7 24-24 24S0 469.3 0 456v-16c0-75.1 38.4-141.1 96.4-179.8C102.5 168.5 178.8 96 272 96c83.3 0 132.2-22.6 159.6-43.2 13.9-10.4 22.7-20.6 27.9-27.9 2.6-3.6 4.3-6.5 5.3-8.3.5-.9.8-1.6 1-1.9l.1-.2v.1C470.3 4.1 481.5-1.8 492.7.4zm-32.3 90.7C423.8 118.6 364.6 144 272 144c-70.7 0-128 57.3-128 128 0 70.4 58.3 128 129.2 128C377.9 400 464 315.1 464 210.9V88.3c-1.2.9-2.4 1.9-3.6 2.8zM258.9 192c13.5 0 26.5 5.4 36 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9h2.9c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48z"})
);

export default LanLeafHeartRegular;
