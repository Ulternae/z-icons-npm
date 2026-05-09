import React from 'react';

export interface MinaTelephoneOutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneOut: React.FC<MinaTelephoneOutProps>;
export default MinaTelephoneOut;
