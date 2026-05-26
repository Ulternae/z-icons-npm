import React from 'react';

export interface LanOilTempThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOilTempThin: React.FC<LanOilTempThinProps>;
export default LanOilTempThin;
