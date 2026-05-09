import React from 'react';

export interface MinaEggSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEggSolid: React.FC<MinaEggSolidProps>;
export default MinaEggSolid;
