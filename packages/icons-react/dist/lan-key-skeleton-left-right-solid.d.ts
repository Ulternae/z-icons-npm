import React from 'react';

export interface LanKeySkeletonLeftRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeletonLeftRightSolid: React.FC<LanKeySkeletonLeftRightSolidProps>;
export default LanKeySkeletonLeftRightSolid;
