import React from 'react';

export interface MinaSevenOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenOctagon: React.FC<MinaSevenOctagonProps>;
export default MinaSevenOctagon;
