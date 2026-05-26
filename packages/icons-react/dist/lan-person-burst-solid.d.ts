import React from 'react';

export interface LanPersonBurstSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBurstSolid: React.FC<LanPersonBurstSolidProps>;
export default LanPersonBurstSolid;
