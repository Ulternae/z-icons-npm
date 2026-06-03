import React from 'react';

export const LanUtensilsSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L512 457.5V16c0-8.8-7.2-16-16-16h-8c-75.1 0-136 60.9-136 136v152c0 3.5.3 6.9.8 10.3l-81-81c8.2-13.6 12.5-29.8 11.3-47L272 14.9C271.3 6 263.7-.6 254.9 0S239.4 8.3 240 17.1l11.1 155.4c.5 7.4-.6 14.5-3.1 20.9l-24.3-24.3L216 15.2c-.5-8.8-8-15.6-16.8-15.2S183.6 8 184 16.8l5.9 118.6-26.6-26.6 4.6-92C168.4 8 161.6.5 152.8 0S136.5 6.4 136 15.2l-3.2 63.1-23.6-23.6 2.7-37.6C112.6 8.3 106 .7 97.1 0S80.7 6 80 14.9l-.7 9.9zm378.4 378.4c3.4.5 6.8.8 10.3.8h64v73.5zM68.9 170.3c-3.3 46.3 33.4 85.7 79.8 85.7H160v240c0 8.8 7.2 16 16 16s16-7.2 16-16V256h5.5l-32-32h-16.8c-27.9 0-49.9-23.6-47.9-51.4l.9-12.3-29.9-29.9-2.9 40zM480 320h-64c-17.7 0-32-14.3-32-32V136c0-54.7 42.3-99.6 96-103.7z"})
);

export default LanUtensilsSlash;
