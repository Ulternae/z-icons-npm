import React from 'react';

export interface LanPersonBoothThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonBoothThin: React.FC<LanPersonBoothThinProps>;
export default LanPersonBoothThin;
