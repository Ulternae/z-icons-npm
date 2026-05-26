import React from 'react';

export interface LanTriangleMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTriangleMusicSolid: React.FC<LanTriangleMusicSolidProps>;
export default LanTriangleMusicSolid;
