import React from 'react';

export interface MinaCheckOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckOctagon: React.FC<MinaCheckOctagonProps>;
export default MinaCheckOctagon;
