import React from 'react';

export function LanPeruvianSolesSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M389.3 493.8c-3.2 12.8-16.2 20.6-29.1 17.4s-20.7-16.2-17.5-29.1zm69.5-475.7C462 5.3 475-2.5 487.9.7s20.7 16.2 17.5 29.1l-116 464c-15.5-3.9-31-7.8-46.6-11.7zM248 64c13.3 0 24 10.8 24 24s-10.7 24-24 24H118c-29.8 0-54 24.2-54 54 0 26.4 19.1 48.9 45.1 53.2l106.1 17.7c51.2 8.5 88.8 52.9 88.8 104.8 0 58.7-47.6 106.3-106.3 106.3H56c-13.3 0-24-10.7-24-24s10.8-24 24-24h141.7c32.2 0 58.3-26.1 58.3-58.3 0-28.5-20.6-52.8-48.7-57.5l-106.1-17.7C52.1 258.3 16 215.8 16 166c0-56.3 45.7-102 102-102z"})
  );
}

export default LanPeruvianSolesSignRegular;
