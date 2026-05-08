import React from 'react';

export interface MinaFiveOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFiveOctagon: React.FC<MinaFiveOctagonProps>;
export default MinaFiveOctagon;
