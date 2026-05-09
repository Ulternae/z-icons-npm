import React from 'react';

export interface MinaArProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAr: React.FC<MinaArProps>;
export default MinaAr;
