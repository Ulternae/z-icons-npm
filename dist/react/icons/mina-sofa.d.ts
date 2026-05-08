import React from 'react';

export interface MinaSofaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSofa: React.FC<MinaSofaProps>;
export default MinaSofa;
