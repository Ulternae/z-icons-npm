import React from 'react';

export interface LanSquareBitcoinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBitcoinSolid: React.FC<LanSquareBitcoinSolidProps>;
export default LanSquareBitcoinSolid;
