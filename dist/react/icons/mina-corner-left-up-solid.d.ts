import React from 'react';

export interface MinaCornerLeftUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerLeftUpSolid: React.FC<MinaCornerLeftUpSolidProps>;
export default MinaCornerLeftUpSolid;
