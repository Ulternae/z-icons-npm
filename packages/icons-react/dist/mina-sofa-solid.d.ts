import React from 'react';

export interface MinaSofaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSofaSolid: React.FC<MinaSofaSolidProps>;
export default MinaSofaSolid;
