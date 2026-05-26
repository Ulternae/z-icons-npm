import React from 'react';

export interface LanPumpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpSolid: React.FC<LanPumpSolidProps>;
export default LanPumpSolid;
