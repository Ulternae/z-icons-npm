import React from 'react';

export interface LanSquareJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareJ: React.FC<LanSquareJProps>;
export default LanSquareJ;
