import React from 'react';

export interface LanPumpkinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpkinSolid: React.FC<LanPumpkinSolidProps>;
export default LanPumpkinSolid;
