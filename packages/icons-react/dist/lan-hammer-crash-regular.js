import React from 'react';

export const LanHammerCrashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M456.2-32c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24zm-24 280c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48c0-13.3-10.7-24-24-24m200-104c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24M573.6 2.6c-9.4-9.4-24.6-9.4-33.9 0l-34 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9zm-33.9 215c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zM80.1 208v-60.1L148 80h172.1v128zm-48-66.7V224c0 17.7 14.3 32 32 32h136v264c0 13.3 10.7 24 24 24s24-10.7 24-24V256h88c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H141.3c-8.5 0-16.6 3.4-22.6 9.4l-77.2 77.2c-6 6-9.4 14.1-9.4 22.6z"})
);

export default LanHammerCrashRegular;
