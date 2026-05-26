import React from 'react';

export interface LanTireFlatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireFlatSolid: React.FC<LanTireFlatSolidProps>;
export default LanTireFlatSolid;
