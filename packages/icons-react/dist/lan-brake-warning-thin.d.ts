import React from 'react';

export interface LanBrakeWarningThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrakeWarningThin: React.FC<LanBrakeWarningThinProps>;
export default LanBrakeWarningThin;
