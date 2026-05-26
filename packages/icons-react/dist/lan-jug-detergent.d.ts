import React from 'react';

export interface LanJugDetergentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJugDetergent: React.FC<LanJugDetergentProps>;
export default LanJugDetergent;
