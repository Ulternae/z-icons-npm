import React from 'react';

export interface LanOctagonXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonXmarkThin: React.FC<LanOctagonXmarkThinProps>;
export default LanOctagonXmarkThin;
