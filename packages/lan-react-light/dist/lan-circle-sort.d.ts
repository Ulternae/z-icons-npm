import React from 'react';

export interface LanCircleSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSort(props: LanCircleSortProps): React.ReactElement;
export default LanCircleSort;
