import React from 'react';

export interface LanMeterFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterFireThin: React.FC<LanMeterFireThinProps>;
export default LanMeterFireThin;
