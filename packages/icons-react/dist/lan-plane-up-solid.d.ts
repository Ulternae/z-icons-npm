import React from 'react';

export interface LanPlaneUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneUpSolid: React.FC<LanPlaneUpSolidProps>;
export default LanPlaneUpSolid;
