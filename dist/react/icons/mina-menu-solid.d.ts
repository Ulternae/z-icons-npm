import React from 'react';

export interface MinaMenuSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMenuSolid: React.FC<MinaMenuSolidProps>;
export default MinaMenuSolid;
