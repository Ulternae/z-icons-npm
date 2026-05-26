import React from 'react';

export interface LanPersonWavingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonWavingRegular: React.FC<LanPersonWavingRegularProps>;
export default LanPersonWavingRegular;
