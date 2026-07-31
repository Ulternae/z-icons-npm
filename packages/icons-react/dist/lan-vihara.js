import React from 'react';

export const LanVihara = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M297.2 2.9c-5.5-3.9-12.8-3.9-18.3 0L143.6 97.5C130.2 107 114.2 112 97.7 112H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h1.7c10.3 0 20.5-1.4 30.3-4.2v30.6L72.3 240H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v59.2L39.4 416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h192v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h192v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-23.4L480 331.2V272h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-24.3L448 170.4v-30.6c9.8 2.7 20 4.2 30.3 4.2h1.7c8.8 0 16-7.2 16-16s-7.2-16-16-16h-1.7c-16.4 0-32.4-5-45.9-14.5zM448 272v48H128v-48zm14.7-32H113.3l38.4-48h272.6zM416 160H160v-34.9c.7-.4 1.3-.9 2-1.3l126-88.2 126 88.2c.6.5 1.3.9 2 1.3zm82.1 256H77.9l42.7-64h334.9l42.7 64z"})
);

export default LanVihara;
