import React from 'react';

export interface LanSquareWonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWonThin: React.FC<LanSquareWonThinProps>;
export default LanSquareWonThin;
