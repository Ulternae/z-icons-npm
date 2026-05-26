import React from 'react';

export interface LanSquareCentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCentSolid: React.FC<LanSquareCentSolidProps>;
export default LanSquareCentSolid;
