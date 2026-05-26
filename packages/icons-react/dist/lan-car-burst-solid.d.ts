import React from 'react';

export interface LanCarBurstSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBurstSolid: React.FC<LanCarBurstSolidProps>;
export default LanCarBurstSolid;
