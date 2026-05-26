import React from 'react';

export interface LanHoneyPotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHoneyPotSolid: React.FC<LanHoneyPotSolidProps>;
export default LanHoneyPotSolid;
