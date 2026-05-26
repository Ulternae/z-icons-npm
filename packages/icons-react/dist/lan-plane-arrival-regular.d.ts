import React from 'react';

export interface LanPlaneArrivalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneArrivalRegular: React.FC<LanPlaneArrivalRegularProps>;
export default LanPlaneArrivalRegular;
