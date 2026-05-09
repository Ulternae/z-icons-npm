import React from 'react';

export interface MinaAsteriskOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskOctagon: React.FC<MinaAsteriskOctagonProps>;
export default MinaAsteriskOctagon;
