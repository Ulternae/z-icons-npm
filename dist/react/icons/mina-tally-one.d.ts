import React from 'react';

export interface MinaTallyOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTallyOne: React.FC<MinaTallyOneProps>;
export default MinaTallyOne;
