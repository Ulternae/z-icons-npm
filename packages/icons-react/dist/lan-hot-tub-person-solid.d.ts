import React from 'react';

export interface LanHotTubPersonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHotTubPersonSolid: React.FC<LanHotTubPersonSolidProps>;
export default LanHotTubPersonSolid;
