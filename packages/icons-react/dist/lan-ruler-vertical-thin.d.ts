import React from 'react';

export interface LanRulerVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerVerticalThin: React.FC<LanRulerVerticalThinProps>;
export default LanRulerVerticalThin;
