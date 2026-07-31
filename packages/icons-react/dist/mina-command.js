import React from 'react';

export const MinaCommand = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15.012 5.977v12.046c0 2.645 3.316 3.954 5.14 2.13 1.825-1.825.516-5.141-2.13-5.141H5.978c-2.645 0-3.953 3.316-2.13 5.14 1.825 1.825 5.142.516 5.142-2.13V5.978c0-2.645-3.317-3.953-5.141-2.13-1.824 1.825-.516 5.142 2.13 5.142h12.045c2.645 0 3.954-3.317 2.13-5.141s-5.141-.516-5.141 2.13"})
);

export default MinaCommand;
