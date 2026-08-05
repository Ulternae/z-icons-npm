import React from 'react';

export interface LanBarsSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarsSort(props: LanBarsSortProps): React.ReactElement;
export default LanBarsSort;
