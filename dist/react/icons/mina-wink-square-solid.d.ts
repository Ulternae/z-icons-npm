import React from 'react';

export interface MinaWinkSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinkSquareSolid: React.FC<MinaWinkSquareSolidProps>;
export default MinaWinkSquareSolid;
