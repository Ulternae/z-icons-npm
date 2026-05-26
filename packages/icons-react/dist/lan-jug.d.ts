import React from 'react';

export interface LanJugProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJug: React.FC<LanJugProps>;
export default LanJug;
