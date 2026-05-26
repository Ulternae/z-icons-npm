import React from 'react';

export interface LanGridRound2PlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2PlusRegular: React.FC<LanGridRound2PlusRegularProps>;
export default LanGridRound2PlusRegular;
