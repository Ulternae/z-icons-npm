import React from 'react';

export interface MinaTrashTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrashTwo: React.FC<MinaTrashTwoProps>;
export default MinaTrashTwo;
