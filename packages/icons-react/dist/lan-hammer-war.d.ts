import React from 'react';

export interface LanHammerWarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerWar: React.FC<LanHammerWarProps>;
export default LanHammerWar;
