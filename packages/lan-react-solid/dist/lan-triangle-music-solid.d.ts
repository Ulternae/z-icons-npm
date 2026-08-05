import React from 'react';

export interface LanTriangleMusicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTriangleMusicSolid(props: LanTriangleMusicSolidProps): React.ReactElement;
export default LanTriangleMusicSolid;
