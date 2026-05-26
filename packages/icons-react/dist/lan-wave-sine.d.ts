import React from 'react';

export interface LanWaveSineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveSine: React.FC<LanWaveSineProps>;
export default LanWaveSine;
