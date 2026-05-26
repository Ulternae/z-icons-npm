import React from 'react';

export interface LanRadiationAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRadiationAlt: React.FC<LanRadiationAltProps>;
export default LanRadiationAlt;
