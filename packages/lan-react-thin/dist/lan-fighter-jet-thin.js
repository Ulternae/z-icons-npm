import React from 'react';

export function LanFighterJetThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M168 0h96c4.4 0 8 3.6 8 8s-3.6 8-8 8h-69.8l161.3 176h90.9c18 0 35.7 3.6 52.3 10.5l57.6 24c11.9 5 19.7 16.6 19.7 29.5s-7.8 24.6-19.7 29.5l-57.6 24c-16.6 6.9-34.4 10.5-52.3 10.5h-90.9L194.2 496H264c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V320h-29.1l-45.8 38.1c-1.4 1.2-3.3 1.9-5.1 1.9H8c-4.4 0-8-3.6-8-8V160c0-4.4 3.6-8 8-8h72c1.9 0 3.7.7 5.1 1.9l45.8 38.1H160V16h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8zm8 208h-48c-1.9 0-3.7-.7-5.1-1.9L77.1 168H16v80h48c4.4 0 8 3.6 8 8s-3.6 8-8 8H16v80h61.1l45.8-38.1c1.4-1.2 3.3-1.9 5.1-1.9h318.4c15.8 0 31.5-3.1 46.2-9.2l57.6-24c6-2.5 9.8-8.3 9.8-14.8s-3.9-12.3-9.8-14.8l-57.6-24c-14.6-6.1-30.3-9.2-46.2-9.2zm0-16h157.8L176 19.8zm0 128v172.2L333.8 320z"})
  );
}

export default LanFighterJetThin;
