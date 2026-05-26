import React from 'react';

export interface LanTally1ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally1Thin: React.FC<LanTally1ThinProps>;
export default LanTally1Thin;
