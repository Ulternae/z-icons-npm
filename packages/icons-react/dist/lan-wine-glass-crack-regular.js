import React from 'react';

export const LanWineGlassCrackRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M40.7 18.4C43.2 7.6 52.9 0 64 0h192c11.1 0 20.8 7.6 23.3 18.4l36.3 152.5c2.9 12.1 4.4 24.6 4.4 37.1 0 80.2-59 146.7-136 158.2V496h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V366.2C59 354.6 0 288.2 0 208c0-12.5 1.5-25 4.4-37.1zM83 48 51 182c-2 8.5-3 17.2-3 26 0 61.9 50.2 112 112 112s112-50.2 112-112c0-8.7-1-17.5-3-26L237.1 48h-25.8l10.6 53.2c1.3 6.5-1.6 13.2-7.2 16.7L171.2 145c-6.5 4.1-9.2 12.2-6.5 19.3l30.9 80.4c2.1 5.5-1.9 11.3-7.8 11.3-2.5 0-4.8-1.1-6.4-3l-76-89.8c-5.4-6.4-5-15.8.9-21.6l52.3-52.3c5.4-5.4 6.2-13.8 2-20.2L146.7 48z"})
);

export default LanWineGlassCrackRegular;
