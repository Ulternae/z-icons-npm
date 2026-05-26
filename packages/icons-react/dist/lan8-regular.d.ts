import React from 'react';

export interface Lan8RegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan8Regular: React.FC<Lan8RegularProps>;
export default Lan8Regular;
