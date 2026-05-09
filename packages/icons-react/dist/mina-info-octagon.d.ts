import React from 'react';

export interface MinaInfoOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoOctagon: React.FC<MinaInfoOctagonProps>;
export default MinaInfoOctagon;
