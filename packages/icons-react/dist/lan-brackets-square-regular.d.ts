import React from 'react';

export interface LanBracketsSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsSquareRegular: React.FC<LanBracketsSquareRegularProps>;
export default LanBracketsSquareRegular;
