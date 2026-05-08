import React from 'react';

export interface MinaHashOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashOctagon: React.FC<MinaHashOctagonProps>;
export default MinaHashOctagon;
