import React from 'react';

export interface LanGridRound2PlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound2PlusSolid: React.FC<LanGridRound2PlusSolidProps>;
export default LanGridRound2PlusSolid;
