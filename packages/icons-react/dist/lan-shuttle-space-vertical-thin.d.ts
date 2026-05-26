import React from 'react';

export interface LanShuttleSpaceVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShuttleSpaceVerticalThin: React.FC<LanShuttleSpaceVerticalThinProps>;
export default LanShuttleSpaceVerticalThin;
