import React from 'react';

export interface CoreSortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSortSolid: React.FC<CoreSortSolidProps>;
export default CoreSortSolid;
