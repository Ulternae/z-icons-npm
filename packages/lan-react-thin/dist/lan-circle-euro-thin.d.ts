import React from 'react';

export interface LanCircleEuroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEuroThin(props: LanCircleEuroThinProps): React.ReactElement;
export default LanCircleEuroThin;
