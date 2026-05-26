import React from 'react';

export interface LanSquareLiraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLiraRegular: React.FC<LanSquareLiraRegularProps>;
export default LanSquareLiraRegular;
