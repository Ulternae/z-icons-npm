import React from 'react';

export const CoreEyeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-2.5 0 581.4 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288.2 32c135.2 0 241.5 105.6 290.7 224-49.1 118.4-155.4 224-290.7 224S46.6 374.4-2.5 256C46.6 137.6 152.9 32 288.2 32m0 148a76 76 0 1 0-.3 152 76 76 0 1 0 .3-152"})
);

export default CoreEyeSolid;
