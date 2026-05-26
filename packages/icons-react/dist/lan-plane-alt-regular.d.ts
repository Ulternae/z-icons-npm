import React from 'react';

export interface LanPlaneAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneAltRegular: React.FC<LanPlaneAltRegularProps>;
export default LanPlaneAltRegular;
