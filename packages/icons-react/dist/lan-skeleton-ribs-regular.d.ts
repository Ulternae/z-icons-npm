import React from 'react';

export interface LanSkeletonRibsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonRibsRegular: React.FC<LanSkeletonRibsRegularProps>;
export default LanSkeletonRibsRegular;
