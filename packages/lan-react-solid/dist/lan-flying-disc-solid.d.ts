import React from 'react';

export interface LanFlyingDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlyingDiscSolid(props: LanFlyingDiscSolidProps): React.ReactElement;
export default LanFlyingDiscSolid;
