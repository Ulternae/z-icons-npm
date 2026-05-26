import React from 'react';

export interface LanSquareDivideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDivideSolid: React.FC<LanSquareDivideSolidProps>;
export default LanSquareDivideSolid;
