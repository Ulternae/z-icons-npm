import React from 'react';

export interface LanGridRoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridRoundThin: React.FC<LanGridRoundThinProps>;
export default LanGridRoundThin;
