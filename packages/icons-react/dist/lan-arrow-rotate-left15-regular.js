import React from 'react';

export const LanArrowRotateLeft15Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M75.1 75c100-100 262.1-100 362 0s100 262.1 0 362.1-262.1 100-362.1 0c-14.9-14.9-27.6-31.2-38.1-48.5-6.9-11.3-3.2-26.1 8.1-33s26.1-3.2 32.9 8.1c8.5 14 18.8 27.3 31 39.5 81.2 81.2 212.9 81.2 294.2 0s81.2-213 0-294.2-212.9-81.2-294.2 0L41 177c-6.9 6.9-17.2 8.9-26.2 5.2S0 169.7 0 160V24C0 10.7 10.7 0 24 0s24 10.7 24 24v78.1zm98.3 87.6c7.4-3.7 16.3-3.3 23.3 1.1s11.4 12.1 11.4 20.4v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V222.7c-11.3 4-24-.9-29.5-11.8-5.9-11.9-1.1-26.3 10.8-32.2l32-16zm162.7-2.6c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v24h20c33.1 0 60 26.9 60 60s-26.9 60-60 60h-44c-13.3 0-24-10.7-24-24s10.7-24 24-24h44c6.6 0 12-5.4 12-12s-5.4-12-12-12h-44c-13.3 0-24-10.7-24-24v-72c0-13.3 10.7-24 24-24z"})
);

export default LanArrowRotateLeft15Regular;
