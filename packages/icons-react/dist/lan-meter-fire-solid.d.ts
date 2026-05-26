import React from 'react';

export interface LanMeterFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterFireSolid: React.FC<LanMeterFireSolidProps>;
export default LanMeterFireSolid;
