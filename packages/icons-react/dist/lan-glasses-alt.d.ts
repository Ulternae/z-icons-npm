import React from 'react';

export interface LanGlassesAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassesAlt: React.FC<LanGlassesAltProps>;
export default LanGlassesAlt;
