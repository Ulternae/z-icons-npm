import React from 'react';

export interface LanMaskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskSolid: React.FC<LanMaskSolidProps>;
export default LanMaskSolid;
