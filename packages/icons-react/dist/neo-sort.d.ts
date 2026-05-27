import React from 'react';

export interface NeoSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSort: React.FC<NeoSortProps>;
export default NeoSort;
