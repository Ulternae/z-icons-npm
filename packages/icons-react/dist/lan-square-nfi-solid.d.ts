import React from 'react';

export interface LanSquareNfiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNfiSolid: React.FC<LanSquareNfiSolidProps>;
export default LanSquareNfiSolid;
