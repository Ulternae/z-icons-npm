import React from 'react';

export interface LanWavesSineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWavesSine: React.FC<LanWavesSineProps>;
export default LanWavesSine;
