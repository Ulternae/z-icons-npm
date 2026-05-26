import React from 'react';

export interface LanVialVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVerticalThin: React.FC<LanVialVerticalThinProps>;
export default LanVialVerticalThin;
