import React from 'react';

export interface LanPersonWavingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWavingThin: React.FC<LanPersonWavingThinProps>;
export default LanPersonWavingThin;
