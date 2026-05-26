import React from 'react';

export interface LanBracketRoundRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketRoundRegular: React.FC<LanBracketRoundRegularProps>;
export default LanBracketRoundRegular;
