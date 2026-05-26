import React from 'react';

export interface LanPersonPrayingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPraying: React.FC<LanPersonPrayingProps>;
export default LanPersonPraying;
