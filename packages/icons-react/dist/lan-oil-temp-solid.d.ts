import React from 'react';

export interface LanOilTempSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilTempSolid: React.FC<LanOilTempSolidProps>;
export default LanOilTempSolid;
