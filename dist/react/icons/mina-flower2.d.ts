import React from 'react';

export interface MinaFlower2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlower2: React.FC<MinaFlower2Props>;
export default MinaFlower2;
