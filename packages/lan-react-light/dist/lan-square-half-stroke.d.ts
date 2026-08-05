import React from 'react';

export interface LanSquareHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareHalfStroke(props: LanSquareHalfStrokeProps): React.ReactElement;
export default LanSquareHalfStroke;
