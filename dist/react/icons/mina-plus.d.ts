import React from 'react';

export interface MinaPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlus: React.FC<MinaPlusProps>;
export default MinaPlus;
