import React from 'react';

export const LanHatWizard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 456c0-30.5-24.5-55.4-54.9-56l-79-184.3c-6.6-15.3-7.6-32.5-2.9-48.5l38.4-131.4c3.9-13.5-10.2-25.1-22.7-18.7L236 97c-38.8 20-69.6 52.7-87.4 92.6L55.1 400C24.6 400.5 0 425.4 0 456c0 30.9 25.1 56 56 56h400c30.9 0 56-25.1 56-56M348.8 228.3 422.4 400H240.1v-32h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-32c0-8.8-7.2-16-16-16s-16 7.2-16 16v32h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h32v32H90.2l87.7-197.3c14.8-33.3 40.5-60.5 72.8-77.2l121.7-62.8-27.9 95.6c-6.7 23.1-5.2 47.9 4.2 70.1zM480 456c0 13.3-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24h400c13.3 0 24 10.7 24 24M288 176c0-8.8-7.2-16-16-16s-16 7.2-16 16v16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16z"})
);

export default LanHatWizard;
