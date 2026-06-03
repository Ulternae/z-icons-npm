import React from 'react';

export const LanFileMp4Regular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 580 548',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208 48H96c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h48v48H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v149.5h-48v-128h-88c-39.8 0-72-32.2-72-72v-88zm140.1 112L256 67.9V136c0 13.3 10.7 24 24 24zm-123 229.7 30.9 51.4 30.9-51.4c4.6-7.7 13.8-11.4 22.5-9S324 391 324 400v128c0 11-9 20-20 20s-20-9-20-20v-55.8l-10.9 18.1c-3.6 6-10.1 9.7-17.1 9.7s-13.5-3.7-17.1-9.7L228 472.2V528c0 11-9 20-20 20s-20-9-20-20V400c0-9 6-16.9 14.7-19.3s17.9 1.3 22.5 9zM368 380h32c33.1 0 60 26.9 60 60s-26.9 60-60 60h-12v28c0 11-9 20-20 20s-20-9-20-20V400c0-11 9-20 20-20m32 80c11 0 20-9 20-20s-9-20-20-20h-12v40zm81.9 18.1c-3.8-3.8-5.9-8.8-5.9-14.1v-64c0-11 9-20 20-20s20 9 20 20v44h24v-44c0-11 9-20 20-20s20 9 20 20v128c0 11-9 20-20 20s-20-9-20-20v-44h-44c-5.3 0-10.4-2.1-14.1-5.9"})
);

export default LanFileMp4Regular;
