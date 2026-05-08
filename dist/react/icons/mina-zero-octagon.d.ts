import React from 'react';

export interface MinaZeroOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroOctagon: React.FC<MinaZeroOctagonProps>;
export default MinaZeroOctagon;
