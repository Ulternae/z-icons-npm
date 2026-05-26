import React from 'react';

export interface LanFlyingDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlyingDiscSolid: React.FC<LanFlyingDiscSolidProps>;
export default LanFlyingDiscSolid;
