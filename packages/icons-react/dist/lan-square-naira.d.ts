import React from 'react';

export interface LanSquareNairaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNaira: React.FC<LanSquareNairaProps>;
export default LanSquareNaira;
