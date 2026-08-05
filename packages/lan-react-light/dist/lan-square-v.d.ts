import React from 'react';

export interface LanSquareVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareV(props: LanSquareVProps): React.ReactElement;
export default LanSquareV;
