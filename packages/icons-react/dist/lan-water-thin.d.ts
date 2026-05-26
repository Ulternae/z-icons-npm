import React from 'react';

export interface LanWaterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaterThin: React.FC<LanWaterThinProps>;
export default LanWaterThin;
