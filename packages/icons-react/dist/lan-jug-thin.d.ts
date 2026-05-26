import React from 'react';

export interface LanJugThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugThin: React.FC<LanJugThinProps>;
export default LanJugThin;
