import React from 'react';

export interface LanCircleBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBookOpenSolid: React.FC<LanCircleBookOpenSolidProps>;
export default LanCircleBookOpenSolid;
