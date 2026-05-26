import React from 'react';

export interface LanKeySkeletonLeftRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeletonLeftRightThin: React.FC<LanKeySkeletonLeftRightThinProps>;
export default LanKeySkeletonLeftRightThin;
