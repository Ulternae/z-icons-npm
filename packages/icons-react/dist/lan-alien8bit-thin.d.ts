import React from 'react';

export interface LanAlien8bitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlien8bitThin: React.FC<LanAlien8bitThinProps>;
export default LanAlien8bitThin;
