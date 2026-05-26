import React from 'react';

export interface Lan2RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan2Regular: React.FC<Lan2RegularProps>;
export default Lan2Regular;
