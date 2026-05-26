import React from 'react';

export interface LanPumpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPumpThin: React.FC<LanPumpThinProps>;
export default LanPumpThin;
