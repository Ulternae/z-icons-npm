import React from 'react';

export interface LanCircleSmallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSmallThin(props: LanCircleSmallThinProps): React.ReactElement;
export default LanCircleSmallThin;
