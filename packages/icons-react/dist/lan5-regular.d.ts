import React from 'react';

export interface Lan5RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan5Regular: React.FC<Lan5RegularProps>;
export default Lan5Regular;
