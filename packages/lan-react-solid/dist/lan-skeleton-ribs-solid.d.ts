import React from 'react';

export interface LanSkeletonRibsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonRibsSolid(props: LanSkeletonRibsSolidProps): React.ReactElement;
export default LanSkeletonRibsSolid;
