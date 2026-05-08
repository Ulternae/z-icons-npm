import React from 'react';

export interface MinaCartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartSolid: React.FC<MinaCartSolidProps>;
export default MinaCartSolid;
