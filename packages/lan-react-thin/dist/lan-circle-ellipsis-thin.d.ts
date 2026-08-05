import React from 'react';

export interface LanCircleEllipsisThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEllipsisThin(props: LanCircleEllipsisThinProps): React.ReactElement;
export default LanCircleEllipsisThin;
