import React from 'react';

export interface LanSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSort(props: LanSortProps): React.ReactElement;
export default LanSort;
