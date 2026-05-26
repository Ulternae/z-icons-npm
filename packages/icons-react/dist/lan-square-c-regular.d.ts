import React from 'react';

export interface LanSquareCRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCRegular: React.FC<LanSquareCRegularProps>;
export default LanSquareCRegular;
