import React from 'react';

export interface LanPlaneArrivalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlaneArrivalRegular(props: LanPlaneArrivalRegularProps): React.ReactElement;
export default LanPlaneArrivalRegular;
