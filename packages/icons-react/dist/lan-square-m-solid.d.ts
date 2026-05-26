import React from 'react';

export interface LanSquareMSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMSolid: React.FC<LanSquareMSolidProps>;
export default LanSquareMSolid;
