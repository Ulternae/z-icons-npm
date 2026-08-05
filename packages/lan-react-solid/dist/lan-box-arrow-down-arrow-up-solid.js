import React from 'react';

export function LanBoxArrowDownArrowUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M335.1 16c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.7 10.8 11.9 23.9 11.9 37.2V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V148.5c0-13.3 4.2-26.3 11.9-37.2l48.9-68.5C72.9 26 92.3 16 112.9 16H335zM321 199c-8.8-8.8-22.7-9.3-32.1-1.7l-1.8 1.7-40 40c-6.9 6.9-8.9 17.2-5.2 26.2S254.3 280 264 280h16v112c0 13.3 10.7 24 24 24s24-10.7 24-24V280h16c9.7 0 18.5-5.8 22.2-14.8s1.6-19.3-5.2-26.2zm-177-7c-13.3 0-24 10.7-24 24v112h-16c-9.7 0-18.5 5.8-22.2 14.8S80.2 362.1 87 369l40 40 1.8 1.7c9.4 7.7 23.3 7.1 32.1-1.7l40-40c6.9-6.9 8.9-17.2 5.2-26.2S193.7 328 184 328h-16V216c0-13.3-10.7-24-24-24m-65.3-64h290.7l-34.3-48H113z"})
  );
}

export default LanBoxArrowDownArrowUpSolid;
