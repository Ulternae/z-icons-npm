import React from 'react';

export interface LanCircleSortDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSortDown: React.FC<LanCircleSortDownProps>;
export default LanCircleSortDown;
