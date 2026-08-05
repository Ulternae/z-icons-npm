import React from 'react';

export interface MinaSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSort(props: MinaSortProps): React.ReactElement;
export default MinaSort;
