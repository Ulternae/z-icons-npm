import React from 'react';

export interface LanPenSwirlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSwirl: React.FC<LanPenSwirlProps>;
export default LanPenSwirl;
