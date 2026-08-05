import React from 'react';

export function LanFileAiffSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 548',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 380c24.3 0 44 19.7 44 44v104c0 11-9 20-20 20s-20-9-20-20v-28h-24v28c0 11-9 20-20 20s-20-9-20-20V424c0-24.3 19.7-44 44-44zm88 0c11 0 20 9 20 20v128c0 11-9 20-20 20s-20-9-20-20V400c0-11 9-20 20-20m112 0c11 0 20 9 20 20s-9 20-20 20h-28v24h28c11 0 20 9 20 20s-9 20-20 20h-28v44c0 11-9 20-20 20s-20-9-20-20V400l.4-4c1.9-9.1 9.9-16 19.6-16zm112 0c11 0 20 9 20 20s-9 20-20 20h-28v24h28c11 0 20 9 20 20s-9 20-20 20h-28v44c0 11-9 20-20 20s-20-9-20-20V400l.4-4c1.9-9.1 9.9-16 19.6-16zM245.5 0c17 0 33.2 6.8 45.2 18.8l106.6 106.4c12 12 18.7 28.3 18.7 45.2v165.5H192c-35.3 0-64 28.7-64 64v112H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0zM216 420c-2.2 0-4 1.8-4 4v36h24v-36c0-2.2-1.8-4-4-4zm24-268c0 13.3 10.7 24 24 24h93.5L240 58.5z"})
  );
}

export default LanFileAiffSolid;
