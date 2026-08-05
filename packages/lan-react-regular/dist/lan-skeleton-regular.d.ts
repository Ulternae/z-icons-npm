import React from 'react';

export interface LanSkeletonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonRegular(props: LanSkeletonRegularProps): React.ReactElement;
export default LanSkeletonRegular;
