import React from 'react';

export interface LanSquareListProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareList(props: LanSquareListProps): React.ReactElement;
export default LanSquareList;
