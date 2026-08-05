import React from 'react';

export interface LanKeySkeletonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeySkeleton(props: LanKeySkeletonProps): React.ReactElement;
export default LanKeySkeleton;
