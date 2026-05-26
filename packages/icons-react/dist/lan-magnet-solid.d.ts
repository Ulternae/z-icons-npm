import React from 'react';

export interface LanMagnetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnetSolid: React.FC<LanMagnetSolidProps>;
export default LanMagnetSolid;
