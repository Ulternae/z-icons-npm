import React from 'react';

export interface LanWaterTempThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterTempThin: React.FC<LanWaterTempThinProps>;
export default LanWaterTempThin;
