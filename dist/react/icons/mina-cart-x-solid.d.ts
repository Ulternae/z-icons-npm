import React from 'react';

export interface MinaCartXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCartXSolid: React.FC<MinaCartXSolidProps>;
export default MinaCartXSolid;
