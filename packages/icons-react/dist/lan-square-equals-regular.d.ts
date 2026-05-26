import React from 'react';

export interface LanSquareEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareEqualsRegular: React.FC<LanSquareEqualsRegularProps>;
export default LanSquareEqualsRegular;
