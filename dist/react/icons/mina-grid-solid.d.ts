import React from 'react';

export interface MinaGridSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGridSolid: React.FC<MinaGridSolidProps>;
export default MinaGridSolid;
