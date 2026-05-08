import React from 'react';

export interface MinaMinimizeOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinimizeOne: React.FC<MinaMinimizeOneProps>;
export default MinaMinimizeOne;
