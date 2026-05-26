import React from 'react';

export interface LanKayakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKayakThin: React.FC<LanKayakThinProps>;
export default LanKayakThin;
