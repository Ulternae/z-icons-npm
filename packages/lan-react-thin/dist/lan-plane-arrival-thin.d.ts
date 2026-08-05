import React from 'react';

export interface LanPlaneArrivalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneArrivalThin(props: LanPlaneArrivalThinProps): React.ReactElement;
export default LanPlaneArrivalThin;
