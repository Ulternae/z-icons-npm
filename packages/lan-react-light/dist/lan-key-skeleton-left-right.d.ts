import React from 'react';

export interface LanKeySkeletonLeftRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeySkeletonLeftRight(props: LanKeySkeletonLeftRightProps): React.ReactElement;
export default LanKeySkeletonLeftRight;
