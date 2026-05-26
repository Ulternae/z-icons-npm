import React from 'react';

export interface LanPersonHarassingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonHarassing: React.FC<LanPersonHarassingProps>;
export default LanPersonHarassing;
