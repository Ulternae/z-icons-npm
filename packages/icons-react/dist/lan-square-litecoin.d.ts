import React from 'react';

export interface LanSquareLitecoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareLitecoin: React.FC<LanSquareLitecoinProps>;
export default LanSquareLitecoin;
