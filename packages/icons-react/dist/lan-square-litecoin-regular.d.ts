import React from 'react';

export interface LanSquareLitecoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLitecoinRegular: React.FC<LanSquareLitecoinRegularProps>;
export default LanSquareLitecoinRegular;
