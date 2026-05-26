import React from 'react';

export interface LanHeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeatThin: React.FC<LanHeatThinProps>;
export default LanHeatThin;
