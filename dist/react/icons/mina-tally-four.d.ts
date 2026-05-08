import React from 'react';

export interface MinaTallyFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyFour: React.FC<MinaTallyFourProps>;
export default MinaTallyFour;
