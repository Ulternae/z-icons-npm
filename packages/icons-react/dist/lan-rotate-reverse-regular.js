import React from 'react';

export const LanRotateReverseRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 24C0 14.3 5.8 5.5 14.8 1.8S34.1.2 41 7l51.8 51.8C193.4-24.7 342.9-19.3 437.1 75c43.2 43.2 67.8 98.1 73.6 154.5 1.4 13.2-8.2 25-21.4 26.3s-25-8.2-26.3-21.4c-4.7-45.9-24.7-90.4-59.8-125.5-75.5-75.5-194.6-80.8-276.2-16l50.1 50.1c6.9 6.9 8.9 17.2 5.2 26.2S169.8 184 160.1 184H24c-13.3 0-24-10.7-24-24zm75.1 85L48 81.9V136h54.1zM1.5 282.5c-1.4-13.2 8.2-25 21.4-26.3s25 8.2 26.3 21.4C54 323.4 73.9 368 109 403.1c75.5 75.5 194.6 80.8 276.2 16L335.1 369c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8h136.1c13.3 0 24 10.7 24 24v136c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-51.8-51.8C318.8 536.7 169.3 531.3 75.1 437 31.9 393.8 7.3 338.9 1.5 282.5m462.7 147.6V376h-54.1z"})
);

export default LanRotateReverseRegular;
