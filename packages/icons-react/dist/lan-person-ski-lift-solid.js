import React from 'react';

export const LanPersonSkiLiftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M240 0c8.8 0 16 7.2 16 16v182.3l-32 8.5V16c0-8.8 7.2-16 16-16M64 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m36.4 138c-14.2-30.8 8.3-66 42.2-66 18.2 0 34.8 10.7 42.3 27.3l28.8 63.4 55.9-14.9c25.4-6.8 50.3 12.4 50.3 38.6v122.1L443 343c12.6-4.6 20.9-16.6 20.9-30v-1c0-13.3 10.7-24 24-24s24 10.7 24 24v1c0 33.5-20.9 63.4-52.3 75L128.3 510.5c-12.4 4.6-26.2-1.8-30.8-14.2s1.8-26.2 14.2-30.8L256 412.2V297.7l-66.7 17.8c-22.6 6-46.2-5.1-55.9-26.3zm-54.7-28.4 65 135.8c8.3 17.4 28 26.4 46.6 21.3l36.5-9.9c12.8-3.5 26 4.1 29.5 16.8s-4.1 26-16.8 29.5L170 393c-41 11.2-84.2-8.6-102.5-46.9L2.4 210.4c-5.7-12-.7-26.3 11.3-32s26.3-.7 32 11.3z"})
);

export default LanPersonSkiLiftSolid;
