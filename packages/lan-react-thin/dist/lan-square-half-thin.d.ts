import React from 'react';

export interface LanSquareHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfThin(props: LanSquareHalfThinProps): React.ReactElement;
export default LanSquareHalfThin;
