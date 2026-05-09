import React from 'react';

export interface MinaEarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEar: React.FC<MinaEarProps>;
export default MinaEar;
