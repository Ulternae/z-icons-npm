import React from 'react';

export interface LanSquareFrancSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFrancSolid: React.FC<LanSquareFrancSolidProps>;
export default LanSquareFrancSolid;
