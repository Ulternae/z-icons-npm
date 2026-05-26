import React from 'react';

export interface LanSkeletonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonSolid: React.FC<LanSkeletonSolidProps>;
export default LanSkeletonSolid;
