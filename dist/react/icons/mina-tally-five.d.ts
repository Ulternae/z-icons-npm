import React from 'react';

export interface MinaTallyFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyFive: React.FC<MinaTallyFiveProps>;
export default MinaTallyFive;
