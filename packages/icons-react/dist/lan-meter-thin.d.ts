import React from 'react';

export interface LanMeterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeterThin: React.FC<LanMeterThinProps>;
export default LanMeterThin;
