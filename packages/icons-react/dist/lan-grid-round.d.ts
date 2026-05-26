import React from 'react';

export interface LanGridRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRound: React.FC<LanGridRoundProps>;
export default LanGridRound;
