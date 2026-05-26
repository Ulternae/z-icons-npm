import React from 'react';

export interface LanMeterFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterFire: React.FC<LanMeterFireProps>;
export default LanMeterFire;
