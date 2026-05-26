import React from 'react';

export interface LanMeterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeter: React.FC<LanMeterProps>;
export default LanMeter;
