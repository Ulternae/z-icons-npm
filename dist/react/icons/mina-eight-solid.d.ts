import React from 'react';

export interface MinaEightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightSolid: React.FC<MinaEightSolidProps>;
export default MinaEightSolid;
