import React from 'react';

export function MinaCloudUpload({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m11.966 20-.004-8m7.863 5c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662"}), React.createElement("path", {"d":"m15.144 14.318-3.182-3.182-3.182 3.182"})
  );
}

export default MinaCloudUpload;
