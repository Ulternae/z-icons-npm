import React from 'react';

export interface LanPlaneAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlaneAlt: React.FC<LanPlaneAltProps>;
export default LanPlaneAlt;
