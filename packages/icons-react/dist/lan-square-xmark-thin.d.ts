import React from 'react';

export interface LanSquareXmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareXmarkThin: React.FC<LanSquareXmarkThinProps>;
export default LanSquareXmarkThin;
