import React from 'react';

export const LanBusAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 48c-26.5 0-48 21.5-48 48h352c0-26.5-21.5-48-48-48zm-48 96v64h352v-64zm352 112H48v128c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16zM0 256V96C0 43 43 0 96 0h256c53 0 96 43 96 96v288c0 29.8-20.4 54.9-48 62v42c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40H96v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-42c-27.6-7.1-48-32.2-48-62zm128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64m160 32a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanBusAltRegular;
