import React from 'react';

export interface MinaDotsOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsOctagon: React.FC<MinaDotsOctagonProps>;
export default MinaDotsOctagon;
