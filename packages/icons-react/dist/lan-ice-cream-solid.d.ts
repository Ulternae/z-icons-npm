import React from 'react';

export interface LanIceCreamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIceCreamSolid: React.FC<LanIceCreamSolidProps>;
export default LanIceCreamSolid;
