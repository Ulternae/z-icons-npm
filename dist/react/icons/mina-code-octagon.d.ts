import React from 'react';

export interface MinaCodeOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeOctagon: React.FC<MinaCodeOctagonProps>;
export default MinaCodeOctagon;
