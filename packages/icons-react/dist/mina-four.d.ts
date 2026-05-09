import React from 'react';

export interface MinaFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFour: React.FC<MinaFourProps>;
export default MinaFour;
