import React from 'react';

export interface LanSquareDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDSolid: React.FC<LanSquareDSolidProps>;
export default LanSquareDSolid;
