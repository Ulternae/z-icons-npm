import React from 'react';

export interface LanPersonWavingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWaving: React.FC<LanPersonWavingProps>;
export default LanPersonWaving;
