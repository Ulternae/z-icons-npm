import React from 'react';

export interface LanFerrisWheelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFerrisWheelThin: React.FC<LanFerrisWheelThinProps>;
export default LanFerrisWheelThin;
