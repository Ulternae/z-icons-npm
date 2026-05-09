import React from 'react';

export interface MinaSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSort: React.FC<MinaSortProps>;
export default MinaSort;
