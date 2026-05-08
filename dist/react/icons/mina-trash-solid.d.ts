import React from 'react';

export interface MinaTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTrashSolid: React.FC<MinaTrashSolidProps>;
export default MinaTrashSolid;
