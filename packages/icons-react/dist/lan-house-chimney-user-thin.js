import React from 'react';

export const LanHouseChimneyUserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M266.9 7.2c-6.1-5.7-15.7-5.7-21.8 0l-234.6 219c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3.4L48 213.1V456c0 30.9 25.1 56 56 56h304c30.9 0 56-25.1 56-56V213.1l26.5 24.8c3.2 3 8.3 2.8 11.3-.4s2.8-8.3-.4-11.3l-37.4-35V64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v37.6L266.9 7.3zM448 198.1V456c0 22.1-17.9 40-40 40H104c-22.1 0-40-17.9-40-40V198.1L256 18.9zM448 64v112.3l-64-59.7V64.1c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM256 176a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112a64 64 0 1 0 0-128 64 64 0 1 0 0 128M144 392v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-30.9 25.1-56 56-56h80c30.9 0 56 25.1 56 56v16c0 4.4 3.6 8 8 8s8-3.6 8-8v-16c0-39.8-32.2-72-72-72h-80c-39.8 0-72 32.2-72 72"})
);

export default LanHouseChimneyUserThin;
