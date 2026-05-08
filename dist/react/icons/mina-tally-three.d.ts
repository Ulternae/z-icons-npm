import React from 'react';

export interface MinaTallyThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyThree: React.FC<MinaTallyThreeProps>;
export default MinaTallyThree;
