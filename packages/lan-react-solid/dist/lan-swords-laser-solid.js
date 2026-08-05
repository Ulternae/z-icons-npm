import React from 'react';

export function LanSwordsLaserSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -52.789 640 615.564',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M427.2 215.8 621.5-2.9c10.6-11.9 10-29.9-1.2-41.1s-29.3-11.8-41.2-1.2L355.5 153.5l71.6 62.2zm-244.9 82.1-26.7 26.7 96 96 26.7-26.7zM229 443.3l-96-96-25.4 25.4 96 96zM22.9 457.4c-12.5 12.5-12.5 32.8 0 45.3l50.7 50.7c12.5 12.5 32.8 12.5 45.3 0l62.1-62.1-96-96zM364.3 224 61.4-45.2c-11.8-10.6-29.9-10-41.1 1.2S8.5-14.7 19.1-2.9L220.7 224zm231.3 284.7 22.1-22.1c12.5-12.5 12.5-32.8 0-45.3l-86.1-86.1-44.7 44.7 108.7 108.7zM573 531.3 464.3 422.6l-44.7 44.7 86.1 86.1c12.5 12.5 32.8 12.5 45.3 0zm-176-86.6 112-112-51.3-51.3c-6-6-14.1-9.4-22.6-9.4H263c-14.3 0-21.4 17.2-11.3 27.3z"})
  );
}

export default LanSwordsLaserSolid;
