import React from 'react';

export interface LanGlassHalfFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassHalfFullThin: React.FC<LanGlassHalfFullThinProps>;
export default LanGlassHalfFullThin;
