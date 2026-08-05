import React from 'react';

export interface LanCircleHalfStrokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfStrokeThin(props: LanCircleHalfStrokeThinProps): React.ReactElement;
export default LanCircleHalfStrokeThin;
