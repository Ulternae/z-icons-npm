import React from 'react';

export interface LanSquareERegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareERegular: React.FC<LanSquareERegularProps>;
export default LanSquareERegular;
