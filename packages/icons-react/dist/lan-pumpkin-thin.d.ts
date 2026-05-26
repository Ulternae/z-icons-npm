import React from 'react';

export interface LanPumpkinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpkinThin: React.FC<LanPumpkinThinProps>;
export default LanPumpkinThin;
