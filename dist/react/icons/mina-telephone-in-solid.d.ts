import React from 'react';

export interface MinaTelephoneInSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTelephoneInSolid: React.FC<MinaTelephoneInSolidProps>;
export default MinaTelephoneInSolid;
