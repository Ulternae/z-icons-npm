import React from 'react';

export interface LanJugBottleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugBottleThin: React.FC<LanJugBottleThinProps>;
export default LanJugBottleThin;
