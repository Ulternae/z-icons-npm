import React from 'react';

export interface LanRulerCombinedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRulerCombinedRegular: React.FC<LanRulerCombinedRegularProps>;
export default LanRulerCombinedRegular;
