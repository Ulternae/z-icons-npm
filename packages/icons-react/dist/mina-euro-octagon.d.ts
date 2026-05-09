import React from 'react';

export interface MinaEuroOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroOctagon: React.FC<MinaEuroOctagonProps>;
export default MinaEuroOctagon;
