import React from 'react';

export interface LanCircleVideoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleVideoThin(props: LanCircleVideoThinProps): React.ReactElement;
export default LanCircleVideoThin;
