import React from 'react';

export function LanCloudMusicSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 480C64.5 480 0 415.5 0 336c0-63.4 41-117.2 97.9-136.5C96.6 191.8 96 184 96 176c0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1C381.8 100.8 398.4 96 416 96c53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7C545.5 256 576 300.4 576 352c0 70.7-57.3 128-128 128zm200-288h-48c-13.3 0-24 10.7-24 24v89.8c-5.1-1.2-10.5-1.8-16-1.8-35.3 0-64 25.1-64 56s28.7 56 64 56 64-25.1 64-56V256h24c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24"})
  );
}

export default LanCloudMusicSolid;
