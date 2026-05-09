import React from 'react';

export interface MinaAtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAtSolid: React.FC<MinaAtSolidProps>;
export default MinaAtSolid;
