import React from 'react';

export interface MinaPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPenSolid: React.FC<MinaPenSolidProps>;
export default MinaPenSolid;
