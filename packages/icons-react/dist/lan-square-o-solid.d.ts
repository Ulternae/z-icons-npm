import React from 'react';

export interface LanSquareOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareOSolid: React.FC<LanSquareOSolidProps>;
export default LanSquareOSolid;
