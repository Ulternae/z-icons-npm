import React from 'react';

export interface LanPlaneCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneCircleCheck(props: LanPlaneCircleCheckProps): React.ReactElement;
export default LanPlaneCircleCheck;
