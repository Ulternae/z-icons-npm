import React from 'react';

export interface LanSpinnerThirdProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpinnerThird: React.FC<LanSpinnerThirdProps>;
export default LanSpinnerThird;
