import React from 'react';

export interface LanKeySkeletonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKeySkeletonRegular: React.FC<LanKeySkeletonRegularProps>;
export default LanKeySkeletonRegular;
