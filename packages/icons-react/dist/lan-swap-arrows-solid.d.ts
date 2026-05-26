import React from 'react';

export interface LanSwapArrowsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwapArrowsSolid: React.FC<LanSwapArrowsSolidProps>;
export default LanSwapArrowsSolid;
