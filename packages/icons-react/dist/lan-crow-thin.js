import React from 'react';

export const LanCrowThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 192c0 97.2-78.8 176-176 176H201l21.3-5.3C307.9 341.3 368 264.3 368 176V88c0-39.8 32.2-72 72-72s72 32.2 72 72zM352 88v59.9L3.3 401.5c-3.6 2.6-4.3 7.6-1.8 11.2 2.1 2.9 5.7 3.9 8.9 2.9L136.9 384h149l50.7 123 .8 1.4c2.1 3.1 6.1 4.4 9.7 2.9s5.5-5.2 4.8-8.9l-.4-1.6-48.2-116.9h32.8c15.1 0 29.8-1.7 43.9-5L432.7 507l.8 1.4c2.1 3.1 6.1 4.4 9.7 2.9s5.5-5.2 4.8-8.9l-.5-1.5-52-126.3c77-25 132.6-97.3 132.6-182.6v-44l91.4-22.8c11.5-2.9 18.6-14.4 16-25.9-6.2-28.1-30-48.6-58.2-51l-5.7-.2h-53.1c-14.6-28.5-44.2-48-78.4-48-48.6 0-88 39.4-88 88zm172.7-24h46.8c23.2 0 43.3 16.1 48.3 38.7v2.3c-.4 2.2-2 4.1-4.3 4.6L528 131.5V88c0-8.3-1.2-16.4-3.3-24M46 390.3l306-222.5v8.3c0 81-55.1 151.5-133.7 171.2zM440 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanCrowThin;
