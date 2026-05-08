import React from 'react';

export interface MinaSearchDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchDotSolid: React.FC<MinaSearchDotSolidProps>;
export default MinaSearchDotSolid;
