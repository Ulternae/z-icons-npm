import React from 'react';

export interface LanCircleWThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWThin(props: LanCircleWThinProps): React.ReactElement;
export default LanCircleWThin;
