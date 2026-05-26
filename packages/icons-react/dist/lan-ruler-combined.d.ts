import React from 'react';

export interface LanRulerCombinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerCombined: React.FC<LanRulerCombinedProps>;
export default LanRulerCombined;
