import React from 'react';

export interface LanCircleXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXSolid: React.FC<LanCircleXSolidProps>;
export default LanCircleXSolid;
