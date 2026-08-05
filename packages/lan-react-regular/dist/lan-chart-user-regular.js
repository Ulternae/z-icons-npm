import React from 'react';

export function LanChartUserRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M544 80H192c-8.8 0-16 7.2-16 16v52c-10.2-2.6-21-4-32-4-5.4 0-10.8.3-16 1V96c0-35.3 28.7-64 64-64h352c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H333c-3.6-17.4-10.5-33.6-19.9-48H544c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16m-80 129.9-95 95c-9.4 9.4-24.6 9.4-33.9 0l-40-40c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23 78.1-78.1H400c-13.3 0-24-10.7-24-24s10.7-24 24-24h88c13.3 0 24 10.7 24 24v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-30.1zM64 272a80 80 0 1 1 160 0 80 80 0 1 1-160 0M0 480c0-53 43-96 96-96h96c53 0 96 43 96 96 0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"})
  );
}

export default LanChartUserRegular;
