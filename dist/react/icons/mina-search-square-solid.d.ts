import React from 'react';

export interface MinaSearchSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchSquareSolid: React.FC<MinaSearchSquareSolidProps>;
export default MinaSearchSquareSolid;
