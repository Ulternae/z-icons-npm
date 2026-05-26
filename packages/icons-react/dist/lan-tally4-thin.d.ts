import React from 'react';

export interface LanTally4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally4Thin: React.FC<LanTally4ThinProps>;
export default LanTally4Thin;
