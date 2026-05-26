import React from 'react';

export interface LanGlassesAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassesAltThin: React.FC<LanGlassesAltThinProps>;
export default LanGlassesAltThin;
