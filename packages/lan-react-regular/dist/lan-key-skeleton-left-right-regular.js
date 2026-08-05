import React from 'react';

export function LanKeySkeletonLeftRightRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M592.5 128a80 80 0 1 0-160 0 80 80 0 1 0 160 0m48 0c0 70.7-57.3 128-128 128-62.5 0-114.5-44.8-125.8-104h-82.2v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72c0-13.3 10.7-24 24-24h202.2C398 44.8 450 0 512.5 0c70.7 0 128 57.3 128 128m-592 256a80 80 0 1 0 160 0 80 80 0 1 0-160 0m-48 0c0-70.7 57.3-128 128-128 62.5 0 114.5 44.8 125.8 104h82.2v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48h48v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v72c0 13.3-10.7 24-24 24H254.3C243 467.2 191 512 128.5 512 57.8 512 .5 454.7.5 384"})
  );
}

export default LanKeySkeletonLeftRightRegular;
