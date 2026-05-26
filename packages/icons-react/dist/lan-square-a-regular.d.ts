import React from 'react';

export interface LanSquareARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareARegular: React.FC<LanSquareARegularProps>;
export default LanSquareARegular;
