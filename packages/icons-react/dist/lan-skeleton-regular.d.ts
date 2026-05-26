import React from 'react';

export interface LanSkeletonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkeletonRegular: React.FC<LanSkeletonRegularProps>;
export default LanSkeletonRegular;
