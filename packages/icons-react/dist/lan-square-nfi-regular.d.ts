import React from 'react';

export interface LanSquareNfiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNfiRegular: React.FC<LanSquareNfiRegularProps>;
export default LanSquareNfiRegular;
