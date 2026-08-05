import React from 'react';

export interface LanCircleNThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNThin(props: LanCircleNThinProps): React.ReactElement;
export default LanCircleNThin;
