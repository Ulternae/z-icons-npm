import React from 'react';

export function LanMailboxFlagUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 88v24h-36.7c22.8 25.5 36.7 59.1 36.7 96v208c0 5.5-.7 10.9-2 16h226c8.8 0 16-7.2 16-16V224c0-30.8-12.4-58.7-32.6-79q.6-4.5.6-9V85.4c47.8 27.7 80 79.4 80 138.6v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V208C0 128.5 64.5 64 144 64h148.1c-2.7 7.5-4.1 15.6-4.1 24m-144 24c-53 0-96 43-96 96v208c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16V208c0-53-43-96-96-96M80 248c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24m256-16V88c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-40v72c0 13.3-10.7 24-24 24s-24-10.7-24-24"})
  );
}

export default LanMailboxFlagUpRegular;
