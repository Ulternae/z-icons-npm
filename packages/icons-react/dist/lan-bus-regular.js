import React from 'react';

export const LanBusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 48c26.5 0 48 21.5 48 48H48c0-26.5 21.5-48 48-48zM48 208v-64h152v64zm200 0v-64h152v64zM48 256h352v128c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16zM0 208v176c0 29.8 20.4 54.9 48 62v42c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h256v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-42c27.6-7.1 48-32.2 48-62V96c0-53-43-96-96-96H96C43 0 0 43 0 96zm160 112a32 32 0 1 0-64 0 32 32 0 1 0 64 0m160 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanBusRegular;
