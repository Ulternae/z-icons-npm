import React from 'react';

export interface LanCircleHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHeartThin(props: LanCircleHeartThinProps): React.ReactElement;
export default LanCircleHeartThin;
