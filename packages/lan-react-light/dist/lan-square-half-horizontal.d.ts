import React from 'react';

export interface LanSquareHalfHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfHorizontal(props: LanSquareHalfHorizontalProps): React.ReactElement;
export default LanSquareHalfHorizontal;
