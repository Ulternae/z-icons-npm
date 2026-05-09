import React from 'react';

export const MinaAlarmSmoke = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M17.32 12.053c3.111 3.728-3.111 5.22 0 8.947M12 12.053c3.111 3.728-3.111 5.22 0 8.947m-5.32-8.947c3.111 3.728-3.111 5.22 0 8.947M19 3H5m12.444 0c0 3.118-1.949 5.964-5.444 5.964S6.556 6.118 6.556 3"})
);

export default MinaAlarmSmoke;
