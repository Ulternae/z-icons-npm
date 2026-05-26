import React from 'react';

export interface LanPlaneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneRegular: React.FC<LanPlaneRegularProps>;
export default LanPlaneRegular;
