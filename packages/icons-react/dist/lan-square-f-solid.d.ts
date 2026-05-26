import React from 'react';

export interface LanSquareFSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFSolid: React.FC<LanSquareFSolidProps>;
export default LanSquareFSolid;
