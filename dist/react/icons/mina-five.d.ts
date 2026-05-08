import React from 'react';

export interface MinaFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFive: React.FC<MinaFiveProps>;
export default MinaFive;
