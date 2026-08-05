import React from 'react';

export interface LanSquareHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfStrokeSolid(props: LanSquareHalfStrokeSolidProps): React.ReactElement;
export default LanSquareHalfStrokeSolid;
