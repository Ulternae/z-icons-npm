import React from 'react';

export interface LanTally2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally2Thin: React.FC<LanTally2ThinProps>;
export default LanTally2Thin;
