import React from 'react';

export interface LanBrakeWarningProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrakeWarning: React.FC<LanBrakeWarningProps>;
export default LanBrakeWarning;
