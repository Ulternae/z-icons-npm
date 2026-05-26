import React from 'react';

export interface LanSquareYenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYenRegular: React.FC<LanSquareYenRegularProps>;
export default LanSquareYenRegular;
