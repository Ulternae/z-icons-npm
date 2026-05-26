import React from 'react';

export interface LanHorseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorse: React.FC<LanHorseProps>;
export default LanHorse;
