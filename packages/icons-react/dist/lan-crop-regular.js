import React from 'react';

export const LanCropRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 24c0-13.3 10.7-24 24-24s24 10.7 24 24v326.1L350.1 128H176V80h222.1l73-73c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-73 73V384h56c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v56c0 13.3-10.7 24-24 24s-24-10.7-24-24V161.9L161.9 384H336v48H136c-30.9 0-56-25.1-56-56V128H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h56z"})
);

export default LanCropRegular;
