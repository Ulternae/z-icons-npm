import React from 'react';

export interface MinaTallyTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyTwo: React.FC<MinaTallyTwoProps>;
export default MinaTallyTwo;
