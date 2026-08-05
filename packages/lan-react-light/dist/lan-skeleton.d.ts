import React from 'react';

export interface LanSkeletonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeleton(props: LanSkeletonProps): React.ReactElement;
export default LanSkeleton;
