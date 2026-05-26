import React from 'react';

export interface LanBrakeWarningRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrakeWarningRegular: React.FC<LanBrakeWarningRegularProps>;
export default LanBrakeWarningRegular;
