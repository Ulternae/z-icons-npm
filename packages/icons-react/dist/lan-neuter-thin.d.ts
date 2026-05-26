import React from 'react';

export interface LanNeuterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNeuterThin: React.FC<LanNeuterThinProps>;
export default LanNeuterThin;
