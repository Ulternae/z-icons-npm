import React from 'react';

export interface LanSquare4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquare4Regular: React.FC<LanSquare4RegularProps>;
export default LanSquare4Regular;
