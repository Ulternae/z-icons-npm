import React from 'react';

export interface MinaNineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNine: React.FC<MinaNineProps>;
export default MinaNine;
