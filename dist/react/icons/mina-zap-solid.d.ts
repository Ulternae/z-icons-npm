import React from 'react';

export interface MinaZapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZapSolid: React.FC<MinaZapSolidProps>;
export default MinaZapSolid;
