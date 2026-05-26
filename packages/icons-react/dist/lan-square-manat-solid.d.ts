import React from 'react';

export interface LanSquareManatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareManatSolid: React.FC<LanSquareManatSolidProps>;
export default LanSquareManatSolid;
