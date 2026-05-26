import React from 'react';

export interface LanKeySkeletonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeletonSolid: React.FC<LanKeySkeletonSolidProps>;
export default LanKeySkeletonSolid;
