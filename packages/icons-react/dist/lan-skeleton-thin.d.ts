import React from 'react';

export interface LanSkeletonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonThin: React.FC<LanSkeletonThinProps>;
export default LanSkeletonThin;
