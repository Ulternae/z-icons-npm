import React from 'react';

export interface LanTally5ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally5Thin: React.FC<LanTally5ThinProps>;
export default LanTally5Thin;
