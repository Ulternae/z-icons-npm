import React from 'react';

export interface LanSquareZRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareZRegular: React.FC<LanSquareZRegularProps>;
export default LanSquareZRegular;
