import React from 'react';

export interface LanCircleRubleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRubleThin(props: LanCircleRubleThinProps): React.ReactElement;
export default LanCircleRubleThin;
