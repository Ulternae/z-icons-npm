import React from 'react';

export interface LanRandomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRandom: React.FC<LanRandomProps>;
export default LanRandom;
