import React from 'react';

export interface LanShuttleSpaceVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceVertical: React.FC<LanShuttleSpaceVerticalProps>;
export default LanShuttleSpaceVertical;
