import React from 'react';

export interface LanPersonPrayingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonPrayingThin: React.FC<LanPersonPrayingThinProps>;
export default LanPersonPrayingThin;
