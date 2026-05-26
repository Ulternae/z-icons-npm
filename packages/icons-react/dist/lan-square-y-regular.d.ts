import React from 'react';

export interface LanSquareYRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareYRegular: React.FC<LanSquareYRegularProps>;
export default LanSquareYRegular;
