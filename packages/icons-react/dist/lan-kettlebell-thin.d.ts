import React from 'react';

export interface LanKettlebellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKettlebellThin: React.FC<LanKettlebellThinProps>;
export default LanKettlebellThin;
