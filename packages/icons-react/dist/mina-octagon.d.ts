import React from 'react';

export interface MinaOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOctagon: React.FC<MinaOctagonProps>;
export default MinaOctagon;
