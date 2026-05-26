import React from 'react';

export interface LanHardOfHearingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHardOfHearingRegular: React.FC<LanHardOfHearingRegularProps>;
export default LanHardOfHearingRegular;
