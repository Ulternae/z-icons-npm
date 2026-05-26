import React from 'react';

export interface LanShuttleSpaceVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceVerticalRegular: React.FC<LanShuttleSpaceVerticalRegularProps>;
export default LanShuttleSpaceVerticalRegular;
