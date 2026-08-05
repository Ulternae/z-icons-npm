import React from 'react';

export interface LanSkeletonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkeletonSolid(props: LanSkeletonSolidProps): React.ReactElement;
export default LanSkeletonSolid;
