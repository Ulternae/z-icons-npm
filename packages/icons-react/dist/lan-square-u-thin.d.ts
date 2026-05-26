import React from 'react';

export interface LanSquareUThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareUThin: React.FC<LanSquareUThinProps>;
export default LanSquareUThin;
