import React from 'react';

export interface MinaSearchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchSolid: React.FC<MinaSearchSolidProps>;
export default MinaSearchSolid;
