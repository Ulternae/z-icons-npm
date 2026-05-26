import React from 'react';

export interface LanWaveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWaveThin: React.FC<LanWaveThinProps>;
export default LanWaveThin;
