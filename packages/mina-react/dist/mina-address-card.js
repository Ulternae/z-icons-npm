import React from 'react';

export function MinaAddressCard({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16 10h2m-2 4h2M6.17 15a3 3 0 0 1 5.66 0"}), React.createElement("circle", {"cx":"9","cy":"11","r":"2"}), React.createElement("rect", {"width":"20","height":"14","x":"2","y":"5","rx":"2"})
  );
}

export default MinaAddressCard;
