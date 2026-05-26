import React from 'react';

export interface LanWaterTempSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterTempSolid: React.FC<LanWaterTempSolidProps>;
export default LanWaterTempSolid;
