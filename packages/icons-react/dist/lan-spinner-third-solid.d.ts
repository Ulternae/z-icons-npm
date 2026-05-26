import React from 'react';

export interface LanSpinnerThirdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerThirdSolid: React.FC<LanSpinnerThirdSolidProps>;
export default LanSpinnerThirdSolid;
