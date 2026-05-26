import React from 'react';

export interface LanKeySkeletonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeletonThin: React.FC<LanKeySkeletonThinProps>;
export default LanKeySkeletonThin;
