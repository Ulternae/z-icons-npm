import React from 'react';

export const LanAt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256v24c0 48.6-39.4 88-88 88-33.4 0-62.5-18.7-77.4-46.1-20.4 28-53.4 46.1-90.6 46.1-61.9 0-112-50.1-112-112s50.1-112 112-112c31.3 0 59.7 12.9 80 33.6V176c0-8.8 7.2-16 16-16s16 7.2 16 16v104c0 30.9 25.1 56 56 56s56-25.1 56-56v-24c0-123.7-100.3-224-224-224m80 224a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanAt;
