import React from 'react';

export interface LanBarProgressFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressFullRegular: React.FC<LanBarProgressFullRegularProps>;
export default LanBarProgressFullRegular;
