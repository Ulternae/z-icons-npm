import React from 'react';

export interface MinaOneOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneOctagon: React.FC<MinaOneOctagonProps>;
export default MinaOneOctagon;
