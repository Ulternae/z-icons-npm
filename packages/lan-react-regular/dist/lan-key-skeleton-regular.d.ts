import React from 'react';

export interface LanKeySkeletonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeySkeletonRegular(props: LanKeySkeletonRegularProps): React.ReactElement;
export default LanKeySkeletonRegular;
