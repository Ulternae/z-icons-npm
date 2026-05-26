import React from 'react';

export interface LanBombSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBombSolid: React.FC<LanBombSolidProps>;
export default LanBombSolid;
