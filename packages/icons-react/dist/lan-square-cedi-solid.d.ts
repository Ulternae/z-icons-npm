import React from 'react';

export interface LanSquareCediSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCediSolid: React.FC<LanSquareCediSolidProps>;
export default LanSquareCediSolid;
