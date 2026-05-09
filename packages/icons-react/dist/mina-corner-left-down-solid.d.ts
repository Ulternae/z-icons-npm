import React from 'react';

export interface MinaCornerLeftDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCornerLeftDownSolid: React.FC<MinaCornerLeftDownSolidProps>;
export default MinaCornerLeftDownSolid;
