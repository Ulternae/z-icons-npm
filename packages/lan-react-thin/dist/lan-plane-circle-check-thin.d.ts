import React from 'react';

export interface LanPlaneCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneCircleCheckThin(props: LanPlaneCircleCheckThinProps): React.ReactElement;
export default LanPlaneCircleCheckThin;
