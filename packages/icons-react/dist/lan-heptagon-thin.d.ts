import React from 'react';

export interface LanHeptagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeptagonThin: React.FC<LanHeptagonThinProps>;
export default LanHeptagonThin;
