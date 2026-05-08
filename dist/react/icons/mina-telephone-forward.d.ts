import React from 'react';

export interface MinaTelephoneForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneForward: React.FC<MinaTelephoneForwardProps>;
export default MinaTelephoneForward;
