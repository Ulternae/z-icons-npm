import React from 'react';

export interface LanKeySkeletonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKeySkeletonSolid(props: LanKeySkeletonSolidProps): React.ReactElement;
export default LanKeySkeletonSolid;
