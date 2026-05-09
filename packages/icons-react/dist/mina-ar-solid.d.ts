import React from 'react';

export interface MinaArSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArSolid: React.FC<MinaArSolidProps>;
export default MinaArSolid;
