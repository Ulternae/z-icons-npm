import React from 'react';

export interface LanHandWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandWave: React.FC<LanHandWaveProps>;
export default LanHandWave;
