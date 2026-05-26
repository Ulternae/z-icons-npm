import React from 'react';

export interface LanTally2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally2: React.FC<LanTally2Props>;
export default LanTally2;
