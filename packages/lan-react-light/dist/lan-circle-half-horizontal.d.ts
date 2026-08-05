import React from 'react';

export interface LanCircleHalfHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHalfHorizontal(props: LanCircleHalfHorizontalProps): React.ReactElement;
export default LanCircleHalfHorizontal;
