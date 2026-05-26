import React from 'react';

export interface LanSquareRubleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRubleRegular: React.FC<LanSquareRubleRegularProps>;
export default LanSquareRubleRegular;
