import React from 'react';

export interface LanOctagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonThin: React.FC<LanOctagonThinProps>;
export default LanOctagonThin;
