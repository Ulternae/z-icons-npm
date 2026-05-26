import React from 'react';

export interface LanSquareNairaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNairaRegular: React.FC<LanSquareNairaRegularProps>;
export default LanSquareNairaRegular;
