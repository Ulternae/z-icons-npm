import React from 'react';

export interface LanGlassWhiskeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlassWhiskeyThin: React.FC<LanGlassWhiskeyThinProps>;
export default LanGlassWhiskeyThin;
