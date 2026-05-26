import React from 'react';

export interface LanKeySkeletonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeleton: React.FC<LanKeySkeletonProps>;
export default LanKeySkeleton;
