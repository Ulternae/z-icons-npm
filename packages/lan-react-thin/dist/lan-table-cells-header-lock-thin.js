import React from 'react';

export function LanTableCellsHeaderLockThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 48H128c-26.5 0-48 21.5-48 48v80h369.6c-5 4.9-9.5 10.2-13.5 16H368v272c0 5.5.5 10.8 1.3 16H128c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v49.1c-5.5.8-10.8 2-16 3.5V96c0-26.5-21.5-48-48-48M80 320h128V192H80zm0 96c0 26.5 21.5 48 48 48h80V336H80zm272 48V336H224v128zM224 192v128h128V192zm352 64.1c0-26.5-21.5-48-48-48s-48 21.5-48 48V320h96zM432 368v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32v.1H464v-.1c-17.7 0-32 14.3-32 32m160-111.9V320c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-63.9c0-35.3 28.7-64 64-64s64 28.7 64 64"})
  );
}

export default LanTableCellsHeaderLockThin;
