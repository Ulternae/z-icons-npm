import React from 'react';

export interface LanSkeletonRibsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonRibsRegular(props: LanSkeletonRibsRegularProps): React.ReactElement;
export default LanSkeletonRibsRegular;
