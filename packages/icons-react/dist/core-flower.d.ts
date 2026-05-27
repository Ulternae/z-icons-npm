import React from 'react';

export interface CoreFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFlower: React.FC<CoreFlowerProps>;
export default CoreFlower;
