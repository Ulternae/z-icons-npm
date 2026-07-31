import React from 'react';

export const LanBorderCenterVRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 448a24 24 0 1 1 48 0 24 24 0 1 1-48 0m216 24c-13.3 0-24-10.7-24-24V64c0-13.3 10.7-24 24-24s24 10.7 24 24v384c0 13.3-10.7 24-24 24M32 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48M8 160a24 24 0 1 1 48 0 24 24 0 1 1-48 0m408-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M8 352a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m312 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M104 448a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-408a24 24 0 1 1 0 48 24 24 0 1 1 0-48m168 408a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-408a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72 408a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24-408a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanBorderCenterVRegular;
