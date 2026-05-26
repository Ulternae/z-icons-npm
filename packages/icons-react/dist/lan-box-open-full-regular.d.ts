import React from 'react';

export interface LanBoxOpenFullRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenFullRegular: React.FC<LanBoxOpenFullRegularProps>;
export default LanBoxOpenFullRegular;
