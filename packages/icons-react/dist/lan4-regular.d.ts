import React from 'react';

export interface Lan4RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan4Regular: React.FC<Lan4RegularProps>;
export default Lan4Regular;
