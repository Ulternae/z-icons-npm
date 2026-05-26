import React from 'react';

export interface LanSquareListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareList: React.FC<LanSquareListProps>;
export default LanSquareList;
