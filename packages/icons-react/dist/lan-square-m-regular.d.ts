import React from 'react';

export interface LanSquareMRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareMRegular: React.FC<LanSquareMRegularProps>;
export default LanSquareMRegular;
