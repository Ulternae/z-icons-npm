import React from 'react';

export interface MinaAddressCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAddressCardSolid: React.FC<MinaAddressCardSolidProps>;
export default MinaAddressCardSolid;
