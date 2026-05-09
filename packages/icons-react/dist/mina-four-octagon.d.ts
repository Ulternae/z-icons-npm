import React from 'react';

export interface MinaFourOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourOctagon: React.FC<MinaFourOctagonProps>;
export default MinaFourOctagon;
