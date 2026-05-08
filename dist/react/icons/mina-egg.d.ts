import React from 'react';

export interface MinaEggProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEgg: React.FC<MinaEggProps>;
export default MinaEgg;
