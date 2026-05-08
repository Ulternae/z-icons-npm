import React from 'react';

export interface MinaRhombusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRhombus: React.FC<MinaRhombusProps>;
export default MinaRhombus;
