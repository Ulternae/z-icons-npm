import React from 'react';

export interface LanPlaneAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneAltThin: React.FC<LanPlaneAltThinProps>;
export default LanPlaneAltThin;
