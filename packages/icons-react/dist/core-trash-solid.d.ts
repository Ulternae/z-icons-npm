import React from 'react';

export interface CoreTrashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreTrashSolid: React.FC<CoreTrashSolidProps>;
export default CoreTrashSolid;
