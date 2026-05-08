import React from 'react';

export interface MinaFlower2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlower2Solid: React.FC<MinaFlower2SolidProps>;
export default MinaFlower2Solid;
