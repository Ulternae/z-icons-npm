import React from 'react';

export interface Lan3RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan3Regular: React.FC<Lan3RegularProps>;
export default Lan3Regular;
