import React from 'react';

export interface LanHandsPrayingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsPraying: React.FC<LanHandsPrayingProps>;
export default LanHandsPraying;
