import React from 'react';

export const LanRollerCoaster = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 208c0-61.9 50.2-112 112-112v368c0 8.8 7.2 16 16 16s16-7.2 16-16V99.4c29.6 7.5 55.4 26.8 70.6 54.2l25.4 45.7V464c0 8.8 7.2 16 16 16s16-7.2 16-16V256.9l34.4 61.8c14 25.2 35.9 44.5 61.6 55.3v89.9c0 8.8 7.2 16 16 16s16-7.2 16-16v-81.2c5.7.8 11.4 1.2 17.2 1.2 37.8 0 71.6-16.8 94.8-43.3V464c0 8.8 7.2 16 16 16s16-7.2 16-16V253.6c0-69.4-56.2-125.6-125.6-125.6-31.3 0-61.4 11.6-84.5 32.7l-12.6 11.5 21.5 23.7 12.6-11.5c12.6-11.5 28.1-19.2 44.6-22.5v138.9c5.4 2.1 11.2 3.3 17.2 3.3 5.2 0 10.2-.8 14.8-2.4V161c45.3 6.6 80 45.6 80 92.6 0 52.4-41 98.4-94.8 98.4-34.4 0-66.2-18.7-82.9-48.8l-91.7-165.1C249.2 92.4 201 64 148.7 64H144C64.5 64 0 128.5 0 208v256c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
);

export default LanRollerCoaster;
