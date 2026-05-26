import React from 'react';

export interface Lan360DegreesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const Lan360Degrees: React.FC<Lan360DegreesProps>;
export default Lan360Degrees;
