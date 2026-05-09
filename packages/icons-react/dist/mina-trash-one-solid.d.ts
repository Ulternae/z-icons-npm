import React from 'react';

export interface MinaTrashOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrashOneSolid: React.FC<MinaTrashOneSolidProps>;
export default MinaTrashOneSolid;
