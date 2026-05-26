import React from 'react';

export interface LanGridRound2PlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2PlusThin: React.FC<LanGridRound2PlusThinProps>;
export default LanGridRound2PlusThin;
