import React from 'react';

export interface LanSquareMillRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMillRegular: React.FC<LanSquareMillRegularProps>;
export default LanSquareMillRegular;
