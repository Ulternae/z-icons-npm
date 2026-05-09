import React from 'react';

export interface MinaSearchHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchHomeSolid: React.FC<MinaSearchHomeSolidProps>;
export default MinaSearchHomeSolid;
