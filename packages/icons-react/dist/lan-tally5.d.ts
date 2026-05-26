import React from 'react';

export interface LanTally5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTally5: React.FC<LanTally5Props>;
export default LanTally5;
