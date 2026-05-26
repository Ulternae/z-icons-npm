import React from 'react';

export interface LanObjectSubtractSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectSubtractSolid: React.FC<LanObjectSubtractSolidProps>;
export default LanObjectSubtractSolid;
