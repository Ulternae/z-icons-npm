import React from 'react';

export interface MinaFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFire: React.FC<MinaFireProps>;
export default MinaFire;
