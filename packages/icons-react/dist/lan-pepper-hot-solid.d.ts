import React from 'react';

export interface LanPepperHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPepperHotSolid: React.FC<LanPepperHotSolidProps>;
export default LanPepperHotSolid;
