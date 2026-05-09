import React from 'react';

export interface MinaTelephoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephone: React.FC<MinaTelephoneProps>;
export default MinaTelephone;
