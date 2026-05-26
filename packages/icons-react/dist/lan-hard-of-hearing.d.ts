import React from 'react';

export interface LanHardOfHearingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardOfHearing: React.FC<LanHardOfHearingProps>;
export default LanHardOfHearing;
