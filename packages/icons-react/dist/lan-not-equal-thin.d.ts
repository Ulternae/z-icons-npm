import React from 'react';

export interface LanNotEqualThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotEqualThin: React.FC<LanNotEqualThinProps>;
export default LanNotEqualThin;
