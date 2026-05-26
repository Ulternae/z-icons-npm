import React from 'react';

export interface LanPersonPregnantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPregnant: React.FC<LanPersonPregnantProps>;
export default LanPersonPregnant;
