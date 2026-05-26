import React from 'react';

export interface LanTamaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTamaleSolid: React.FC<LanTamaleSolidProps>;
export default LanTamaleSolid;
