import React from 'react';

export interface LanBallPileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallPileSolid: React.FC<LanBallPileSolidProps>;
export default LanBallPileSolid;
