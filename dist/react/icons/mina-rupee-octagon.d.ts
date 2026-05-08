import React from 'react';

export interface MinaRupeeOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeOctagon: React.FC<MinaRupeeOctagonProps>;
export default MinaRupeeOctagon;
