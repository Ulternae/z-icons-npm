import React from 'react';

export interface LanSkeletonRibsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonRibsThin(props: LanSkeletonRibsThinProps): React.ReactElement;
export default LanSkeletonRibsThin;
