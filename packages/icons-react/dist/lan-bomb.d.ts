import React from 'react';

export interface LanBombProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBomb: React.FC<LanBombProps>;
export default LanBomb;
