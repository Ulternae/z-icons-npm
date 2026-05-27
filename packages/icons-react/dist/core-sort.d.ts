import React from 'react';

export interface CoreSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSort: React.FC<CoreSortProps>;
export default CoreSort;
