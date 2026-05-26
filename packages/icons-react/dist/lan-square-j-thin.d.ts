import React from 'react';

export interface LanSquareJThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareJThin: React.FC<LanSquareJThinProps>;
export default LanSquareJThin;
