import React from 'react';

export interface LanSpineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpineSolid: React.FC<LanSpineSolidProps>;
export default LanSpineSolid;
