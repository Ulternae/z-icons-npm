import React from 'react';

export const LanReflectBothSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m87 73 120 120c9.4 9.4 24.6 9.4 33.9 0L361 73c6.9-6.9 8.9-17.2 5.2-26.2S353.7 32 344 32H104c-9.7 0-18.5 5.8-22.2 14.8S80.2 66.1 87 73m-46 46c-6.9-6.9-17.2-8.9-26.2-5.2S0 126.3 0 136v240c0 9.7 5.8 18.5 14.8 22.2s19.3 1.6 26.2-5.2l120-120c9.4-9.4 9.4-24.6 0-33.9zm46 320c-6.9 6.9-8.9 17.2-5.2 26.2S94.3 480 104 480h240c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L241 319c-9.4-9.4-24.6-9.4-33.9 0zm346.2-325.2c-9-3.7-19.3-1.7-26.2 5.2L287 239c-9.4 9.4-9.4 24.6 0 33.9L407 393c6.9 6.9 17.2 8.9 26.2 5.2S448 385.7 448 376V136c0-9.7-5.8-18.5-14.8-22.2"})
);

export default LanReflectBothSolid;
