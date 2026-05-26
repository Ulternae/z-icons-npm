import React from 'react';

export interface LanMinusOctagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusOctagonThin: React.FC<LanMinusOctagonThinProps>;
export default LanMinusOctagonThin;
