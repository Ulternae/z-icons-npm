import React from 'react';

export const LanBusSchoolThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 16c44.2 0 80 35.8 80 80v16H48V96c0-44.2 35.8-80 80-80zM128 0C75 0 32 43 32 96v152.4C12.4 266 0 291.6 0 320v64c0 23.7 12.9 44.4 32 55.4V480c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-32h192v32c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-40.6c19.1-11.1 32-31.7 32-55.4v-64c0-28.4-12.4-54-32-71.6V96c0-53-43-96-96-96zm-16 448v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16v-34c5.1 1.3 10.5 2 16 2zm224 32v-32h48c5.5 0 10.9-.7 16-2v34c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16m64-352v108.8c-14.1-8.2-30.5-12.8-48-12.8H232v-96zM48 236.8V128h168v96H96c-17.5 0-33.9 4.7-48 12.8m304 3.2c44.2 0 80 35.8 80 80v64c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-64c0-44.2 35.8-80 80-80zM96 336a16 16 0 1 1 32 0 16 16 0 1 1-32 0m48 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m192-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanBusSchoolThin;
