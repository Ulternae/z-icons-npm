import React from 'react';

export interface LanShuttleSpaceVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceVerticalSolid: React.FC<LanShuttleSpaceVerticalSolidProps>;
export default LanShuttleSpaceVerticalSolid;
