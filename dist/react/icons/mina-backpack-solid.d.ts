import React from 'react';

export interface MinaBackpackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBackpackSolid: React.FC<MinaBackpackSolidProps>;
export default MinaBackpackSolid;
