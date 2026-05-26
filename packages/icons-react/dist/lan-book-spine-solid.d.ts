import React from 'react';

export interface LanBookSpineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookSpineSolid: React.FC<LanBookSpineSolidProps>;
export default LanBookSpineSolid;
