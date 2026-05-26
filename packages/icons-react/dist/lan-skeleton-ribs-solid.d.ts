import React from 'react';

export interface LanSkeletonRibsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonRibsSolid: React.FC<LanSkeletonRibsSolidProps>;
export default LanSkeletonRibsSolid;
