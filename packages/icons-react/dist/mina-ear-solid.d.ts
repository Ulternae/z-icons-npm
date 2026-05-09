import React from 'react';

export interface MinaEarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEarSolid: React.FC<MinaEarSolidProps>;
export default MinaEarSolid;
