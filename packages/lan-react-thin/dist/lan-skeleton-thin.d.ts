import React from 'react';

export interface LanSkeletonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonThin(props: LanSkeletonThinProps): React.ReactElement;
export default LanSkeletonThin;
