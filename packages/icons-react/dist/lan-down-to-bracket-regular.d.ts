import React from 'react';

export interface LanDownToBracketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToBracketRegular: React.FC<LanDownToBracketRegularProps>;
export default LanDownToBracketRegular;
