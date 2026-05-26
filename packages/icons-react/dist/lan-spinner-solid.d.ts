import React from 'react';

export interface LanSpinnerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerSolid: React.FC<LanSpinnerSolidProps>;
export default LanSpinnerSolid;
