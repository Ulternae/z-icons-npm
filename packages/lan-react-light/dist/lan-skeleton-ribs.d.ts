import React from 'react';

export interface LanSkeletonRibsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonRibs(props: LanSkeletonRibsProps): React.ReactElement;
export default LanSkeletonRibs;
