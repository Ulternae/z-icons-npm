import React from 'react';

export interface LanSkeletonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeleton: React.FC<LanSkeletonProps>;
export default LanSkeleton;
