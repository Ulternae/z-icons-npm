import React from 'react';

export interface MinaEightOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightOctagon: React.FC<MinaEightOctagonProps>;
export default MinaEightOctagon;
