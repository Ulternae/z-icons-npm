import React from 'react';

export interface LanMeatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMeatThin: React.FC<LanMeatThinProps>;
export default LanMeatThin;
