import React from 'react';

export function LanStarfighterTwinIonEngineRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24V319.4l68.3 14.6c27.4 48.9 79.7 82 139.7 82s112.3-33.1 139.7-82l68.3-14.6V456c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v136.6L395.7 178C368.3 129.1 316 96 256 96s-112.3 33.1-139.7 82L48 192.6zm366.1 175 49.9 10.7v28.6L414.1 281c1.3-8.2 1.9-16.5 1.9-25s-.7-16.9-1.9-25M97.9 281 48 270.3v-28.6L97.9 231c-1.3 8.2-1.9 16.5-1.9 25s.7 16.9 1.9 25M256 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 168a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
  );
}

export default LanStarfighterTwinIonEngineRegular;
