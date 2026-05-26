import React from 'react';

export interface LanTireFlatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireFlatThin: React.FC<LanTireFlatThinProps>;
export default LanTireFlatThin;
