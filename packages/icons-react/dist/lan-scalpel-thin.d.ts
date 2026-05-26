import React from 'react';

export interface LanScalpelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelThin: React.FC<LanScalpelThinProps>;
export default LanScalpelThin;
