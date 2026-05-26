import React from 'react';

export interface LanBallYarnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallYarnSolid: React.FC<LanBallYarnSolidProps>;
export default LanBallYarnSolid;
