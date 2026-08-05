import React from 'react';

export interface LanCircleQuarterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuarterThin(props: LanCircleQuarterThinProps): React.ReactElement;
export default LanCircleQuarterThin;
