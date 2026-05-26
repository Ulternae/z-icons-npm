import React from 'react';

export interface LanFlashlightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlashlightSolid: React.FC<LanFlashlightSolidProps>;
export default LanFlashlightSolid;
