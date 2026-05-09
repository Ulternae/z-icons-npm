import React from 'react';

export interface MinaWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWindSolid: React.FC<MinaWindSolidProps>;
export default MinaWindSolid;
