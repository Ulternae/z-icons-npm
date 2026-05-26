import React from 'react';

export interface LanCircleSortProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSort: React.FC<LanCircleSortProps>;
export default LanCircleSort;
