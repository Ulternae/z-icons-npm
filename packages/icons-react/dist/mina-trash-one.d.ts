import React from 'react';

export interface MinaTrashOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrashOne: React.FC<MinaTrashOneProps>;
export default MinaTrashOne;
