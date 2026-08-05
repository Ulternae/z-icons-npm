import React from 'react';

export interface LanSquareEllipsisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEllipsisThin(props: LanSquareEllipsisThinProps): React.ReactElement;
export default LanSquareEllipsisThin;
