import React from 'react';

export interface MinaCartPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartPlusSolid: React.FC<MinaCartPlusSolidProps>;
export default MinaCartPlusSolid;
