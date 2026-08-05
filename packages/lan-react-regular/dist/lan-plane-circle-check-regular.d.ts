import React from 'react';

export interface LanPlaneCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneCircleCheckRegular(props: LanPlaneCircleCheckRegularProps): React.ReactElement;
export default LanPlaneCircleCheckRegular;
