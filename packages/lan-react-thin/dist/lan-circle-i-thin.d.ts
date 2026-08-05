import React from 'react';

export interface LanCircleIThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleIThin(props: LanCircleIThinProps): React.ReactElement;
export default LanCircleIThin;
