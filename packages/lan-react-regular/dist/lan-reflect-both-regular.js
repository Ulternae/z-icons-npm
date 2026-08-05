import React from 'react';

export function LanReflectBothRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m87 73 120 120c9.4 9.4 24.6 9.4 33.9 0L361 73c6.9-6.9 8.9-17.2 5.2-26.2S353.7 32 344 32H104c-9.7 0-18.5 5.8-22.2 14.8S80.2 66.1 87 73m137 69.1L161.9 80h124.2zM41 119c-6.9-6.9-17.2-8.9-26.2-5.2S0 126.3 0 136v240c0 9.7 5.8 18.5 14.8 22.2s19.3 1.6 26.2-5.2l120-120c9.4-9.4 9.4-24.6 0-33.9zm69.1 137L48 318.1V193.9zM87 439c-6.9 6.9-8.9 17.2-5.2 26.2S94.3 480 104 480h240c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2L241 319c-9.4-9.4-24.6-9.4-33.9 0zm137-69.1 62.1 62.1H162l62.1-62.1zm209.2-256.1c-9-3.7-19.3-1.7-26.2 5.2L287 239c-9.4 9.4-9.4 24.6 0 33.9L407 393c6.9 6.9 17.2 8.9 26.2 5.2S448 385.7 448 376V136c0-9.7-5.8-18.5-14.8-22.2M400 318.1 337.9 256l62.1-62.1V318z"})
  );
}

export default LanReflectBothRegular;
