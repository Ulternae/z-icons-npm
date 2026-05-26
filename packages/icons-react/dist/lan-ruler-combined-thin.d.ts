import React from 'react';

export interface LanRulerCombinedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerCombinedThin: React.FC<LanRulerCombinedThinProps>;
export default LanRulerCombinedThin;
