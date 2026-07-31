import React from 'react';

export function CoreEyeRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-2.5 0 581.4 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M67.6 256c42.8 84 120.9 160 220.5 160s177.7-76 220.5-160C465.9 172 387.8 96 288.2 96S110.4 172 67.6 256m312.2 0a91.8 91.8 0 1 1-183.7 0 91.8 91.8 0 1 1 183.7 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M288.2 32c135.2 0 241.5 105.6 290.7 224-49.1 118.4-155.4 224-290.7 224S46.6 374.4-2.5 256C46.6 137.6 152.9 32 288.2 32m0 64c-99.7 0-177.7 76-220.5 160 42.8 84 120.9 160 220.5 160s177.7-76 220.5-160C465.9 172 387.8 96 288.2 96m-.3 252a92 92 0 1 1 .3-184 92 92 0 1 1-.3 184m.3-128a36 36 0 1 0-.3 72 36 36 0 1 0 .3-72"})
  );
}

export default CoreEyeRegularDuo;
