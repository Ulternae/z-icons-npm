import React from 'react';

export interface LanHandWaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandWaveThin: React.FC<LanHandWaveThinProps>;
export default LanHandWaveThin;
