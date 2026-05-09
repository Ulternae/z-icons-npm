import React from 'react';

export interface MinaHashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashSolid: React.FC<MinaHashSolidProps>;
export default MinaHashSolid;
