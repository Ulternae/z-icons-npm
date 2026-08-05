import React from 'react';

export function LanAvocadoSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M459.4 255.3c-18.5 15.2-33.5 35.6-38.1 59.1-10.2 51.9-34 104.5-66.3 136.7-81.2 81.2-212.9 81.2-294.2 0s-81.2-212.9 0-294.2c32.3-32.3 84.9-56.1 136.7-66.3C221 86 241.4 71 256.6 52.5 283 20.4 323-.1 367.9-.1c79.5 0 144 64.5 144 144 0 44.8-20.5 84.9-52.6 111.3zm-176.2 91.9c41.7-41.7 49.1-102.1 16.4-134.8s-93-25.3-134.8 16.4-49.1 102.1-16.4 134.8 93 25.3 134.8-16.4"})
  );
}

export default LanAvocadoSolid;
