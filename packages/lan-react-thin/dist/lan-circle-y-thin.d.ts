import React from 'react';

export interface LanCircleYThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleYThin(props: LanCircleYThinProps): React.ReactElement;
export default LanCircleYThin;
