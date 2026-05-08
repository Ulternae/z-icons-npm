import React from 'react';

export interface MinaXOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXOctagon: React.FC<MinaXOctagonProps>;
export default MinaXOctagon;
