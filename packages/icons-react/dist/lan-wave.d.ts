import React from 'react';

export interface LanWaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWave: React.FC<LanWaveProps>;
export default LanWave;
