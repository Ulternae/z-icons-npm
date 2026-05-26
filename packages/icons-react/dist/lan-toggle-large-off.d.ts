import React from 'react';

export interface LanToggleLargeOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToggleLargeOff: React.FC<LanToggleLargeOffProps>;
export default LanToggleLargeOff;
