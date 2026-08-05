import React from 'react';

export interface LanSquareHalfStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfStrokeThin(props: LanSquareHalfStrokeThinProps): React.ReactElement;
export default LanSquareHalfStrokeThin;
