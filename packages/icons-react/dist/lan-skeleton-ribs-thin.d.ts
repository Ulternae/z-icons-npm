import React from 'react';

export interface LanSkeletonRibsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonRibsThin: React.FC<LanSkeletonRibsThinProps>;
export default LanSkeletonRibsThin;
