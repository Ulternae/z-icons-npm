import React from 'react';

export interface MinaFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlower: React.FC<MinaFlowerProps>;
export default MinaFlower;
