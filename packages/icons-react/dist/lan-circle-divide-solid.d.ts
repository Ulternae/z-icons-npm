import React from 'react';

export interface LanCircleDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDivideSolid: React.FC<LanCircleDivideSolidProps>;
export default LanCircleDivideSolid;
