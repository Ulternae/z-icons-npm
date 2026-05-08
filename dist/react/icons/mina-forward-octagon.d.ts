import React from 'react';

export interface MinaForwardOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaForwardOctagon: React.FC<MinaForwardOctagonProps>;
export default MinaForwardOctagon;
