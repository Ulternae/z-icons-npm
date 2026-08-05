import React from 'react';

export interface NeoSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSort(props: NeoSortProps): React.ReactElement;
export default NeoSort;
