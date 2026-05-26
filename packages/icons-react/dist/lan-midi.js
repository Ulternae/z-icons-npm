import React from 'react';

export const LanMidi = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 52.3c0-20.1 19.3-36.5 39.6-30.2l4.1 1.6 8.1 3.9C455 69.9 512 156.3 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 153.1 60.8 64.4 148.3 23.7l4.1-1.6c20.3-6.4 39.6 10 39.6 30.2V112l.3 3.2c1.5 7.3 8 12.8 15.7 12.8h96l3.2-.3c7.3-1.5 12.8-8 12.8-15.7zm32 59.7-.2 4.9c-2.3 22.6-20.3 40.6-42.8 42.8l-4.9.2h-96c-24.9 0-45.3-18.9-47.8-43.1l-.2-4.9V53.5C84.3 89.6 32 166.7 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224c0-89.3-52.3-166.4-128-202.4zm-96 320a24 24 0 1 1 0-48 24 24 0 1 1 0 48m-90.5-51.6a24 24 0 1 1-33.9-33.9 24 24 0 1 1 33.9 33.9m214.9 0a24 24 0 1 1-33.9-33.9 24 24 0 1 1 33.9 33.9M104 280a24 24 0 1 1 0-48 24 24 0 1 1 0 48m304 0a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanMidi;
