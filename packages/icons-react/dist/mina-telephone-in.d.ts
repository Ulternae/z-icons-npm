import React from 'react';

export interface MinaTelephoneInProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneIn: React.FC<MinaTelephoneInProps>;
export default MinaTelephoneIn;
