import React from 'react';

export interface MinaSearchCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchCheckSolid: React.FC<MinaSearchCheckSolidProps>;
export default MinaSearchCheckSolid;
