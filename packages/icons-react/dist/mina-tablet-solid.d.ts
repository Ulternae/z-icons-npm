import React from 'react';

export interface MinaTabletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTabletSolid: React.FC<MinaTabletSolidProps>;
export default MinaTabletSolid;
