import React from 'react';

export interface LanTally4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally4: React.FC<LanTally4Props>;
export default LanTally4;
