import React from 'react';

export interface MinaMinusOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusOctagon: React.FC<MinaMinusOctagonProps>;
export default MinaMinusOctagon;
