import React from 'react';

export const LanSwedishKronaSignThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V339.8l56.8-45.4 136.8 182.4c2.6 3.5 7.7 4.3 11.2 1.6s4.2-7.7 1.6-11.2L117.3 284.4 245 182.2c3.4-2.8 4-7.8 1.2-11.2s-7.8-4-11.2-1.2L48 319.4zm264 128c-4.4 0-8 3.6-8 8v296c0 4.4 3.6 8 8 8s8-3.6 8-8V279.6c0-23.2 9.2-45.5 25.7-61.9s38.7-25.7 61.9-25.7H440c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32.4c-27.5 0-53.8 10.9-73.3 30.3-5.5 5.5-10.3 11.5-14.3 17.9v-48.3c0-4.4-3.6-8-8-8z"})
);

export default LanSwedishKronaSignThin;
