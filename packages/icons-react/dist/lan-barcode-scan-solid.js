import React from 'react';

export const LanBarcodeScanSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 32c-17.7 0-32 14.3-32 32v160H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h528c13.3 0 24-10.7 24-24s-10.7-24-24-24h-40V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v168h-48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v168h-48V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v160h-48V56c0-13.3-10.7-24-24-24s-24 10.7-24 24v168h-32V64c0-17.7-14.3-32-32-32M64 448c0 17.7 14.3 32 32 32s32-14.3 32-32V320H64zm96 8c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm96-8c0 17.7 14.3 32 32 32s32-14.3 32-32V320h-64zm112 8c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48zm96 0c0 13.3 10.7 24 24 24s24-10.7 24-24V320h-48z"})
);

export default LanBarcodeScanSolid;
