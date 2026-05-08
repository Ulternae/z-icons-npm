import React from 'react';

export interface MinaDropletsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDroplets: React.FC<MinaDropletsProps>;
export default MinaDroplets;
