import React from 'react';

export interface LanGridRound2PlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2Plus: React.FC<LanGridRound2PlusProps>;
export default LanGridRound2Plus;
