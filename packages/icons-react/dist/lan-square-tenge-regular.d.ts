import React from 'react';

export interface LanSquareTengeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareTengeRegular: React.FC<LanSquareTengeRegularProps>;
export default LanSquareTengeRegular;
