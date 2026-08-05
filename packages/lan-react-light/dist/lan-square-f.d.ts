import React from 'react';

export interface LanSquareFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareF(props: LanSquareFProps): React.ReactElement;
export default LanSquareF;
