import React from 'react';

export const LanSolarPanelThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M75 85.6 49.6 200h155.2l10.9-152H122c-22.7 0-42.2 15.6-47 37.6M46 216l-20.8 93.6C18.5 339.6 41.3 368 72 368h120.7l10.9-152zm173.6 0-10.9 152h158.8l-10.9-152H219.5zm153.1 0 10.9 152h120.7c30.7 0 53.5-28.4 46.9-58.4L530.4 216H372.8zm154-16L501.3 85.6C496.4 63.6 477 48 454.5 48h-93.7l10.9 152h155.2zm-171.2 0L344.6 48H231.5l-10.9 152h134.8zM59.3 82.1C65.8 52.8 91.8 32 121.8 32h332.7c30 0 56 20.8 62.5 50.1l49.8 224c8.9 40-21.5 77.9-62.5 77.9H296.2v112h112c4.4 0 8 3.6 8 8s-3.6 8-8 8h-240c-4.4 0-8-3.6-8-8s3.6-8 8-8h112V384H72.1c-41 0-71.4-37.9-62.5-77.9l49.8-224z"})
);

export default LanSolarPanelThin;
