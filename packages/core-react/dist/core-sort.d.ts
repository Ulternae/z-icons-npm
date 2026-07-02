import React from 'react';

export interface CoreSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreSort(props: CoreSortProps): React.ReactElement;
export default CoreSort;
