import React from 'react';

export const MinaMathSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6.429 2.25a.75.75 0 0 1 .75.75v2.762h2.678a.75.75 0 1 1 0 1.5H7.18v2.762a.75.75 0 0 1-1.5 0V7.262H3a.75.75 0 0 1 0-1.5h2.679V3a.75.75 0 0 1 .75-.75m7.821 2.067a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m0 4.39a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m.826 6.789a.75.75 0 0 1 1.06.013l1.889 1.934 1.887-1.934a.75.75 0 0 1 1.074 1.048l-1.913 1.96 1.913 1.959a.75.75 0 0 1-1.074 1.048l-1.887-1.934-1.888 1.934a.75.75 0 1 1-1.074-1.048l1.914-1.96-1.914-1.96a.75.75 0 0 1 .013-1.06M2.68 18.366a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5h-6a.75.75 0 0 1-.75-.75"})
);

export default MinaMathSolid;
