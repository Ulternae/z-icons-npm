import React from 'react';

export interface LanPersonSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSignThin: React.FC<LanPersonSignThinProps>;
export default LanPersonSignThin;
