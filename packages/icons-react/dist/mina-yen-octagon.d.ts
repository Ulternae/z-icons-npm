import React from 'react';

export interface MinaYenOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaYenOctagon: React.FC<MinaYenOctagonProps>;
export default MinaYenOctagon;
