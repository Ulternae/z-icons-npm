import React from 'react';

export interface LanSquareHalfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalf(props: LanSquareHalfProps): React.ReactElement;
export default LanSquareHalf;
