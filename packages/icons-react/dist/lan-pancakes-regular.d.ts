import React from 'react';

export interface LanPancakesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPancakesRegular: React.FC<LanPancakesRegularProps>;
export default LanPancakesRegular;
