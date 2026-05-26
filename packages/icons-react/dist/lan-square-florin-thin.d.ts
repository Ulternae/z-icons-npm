import React from 'react';

export interface LanSquareFlorinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFlorinThin: React.FC<LanSquareFlorinThinProps>;
export default LanSquareFlorinThin;
