import React from 'react';

export interface LanHeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeat: React.FC<LanHeatProps>;
export default LanHeat;
