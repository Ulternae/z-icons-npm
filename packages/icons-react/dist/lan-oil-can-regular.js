import React from 'react';

export const LanOilCanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M328 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H184c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48H48c-26.5 0-48 21.5-48 48v64.8c0 19 11.2 36.2 28.5 43.9l67.5 30V368c0 26.5 21.5 48 48 48h259.1c18.4 0 35.8-7.9 48-21.7L615 208.6l1.4-1.6c4.8-5.4 10.5-11.8 17-19.3 12.3-13.9-.3-35.4-18.4-31.5-9.7 2.1-18.1 3.9-25.1 5.4l-2.1.4L448 192l-50.5-25.2c-8.9-4.4-18.7-6.8-28.6-6.8H280v-48zm97.1 125.8c10.4 5.2 22.3 6.7 33.6 4.3l72.1-15.4-118.1 133.9c-2.4 2.8-5.9 4.3-9.6 4.3H147.2V211.3h221.7c2 0 3.9.5 5.7 1.4l50.5 25.2zM96 294.1l-48-21.3V208h48z"})
);

export default LanOilCanRegular;
