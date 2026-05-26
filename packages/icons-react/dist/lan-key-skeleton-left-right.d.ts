import React from 'react';

export interface LanKeySkeletonLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeletonLeftRight: React.FC<LanKeySkeletonLeftRightProps>;
export default LanKeySkeletonLeftRight;
