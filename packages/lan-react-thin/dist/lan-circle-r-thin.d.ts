import React from 'react';

export interface LanCircleRThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleRThin(props: LanCircleRThinProps): React.ReactElement;
export default LanCircleRThin;
