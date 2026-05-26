import React from 'react';

export interface LanSkeletonRibsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonRibs: React.FC<LanSkeletonRibsProps>;
export default LanSkeletonRibs;
