import React from 'react';

export interface LanKeySkeletonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeySkeletonThin(props: LanKeySkeletonThinProps): React.ReactElement;
export default LanKeySkeletonThin;
