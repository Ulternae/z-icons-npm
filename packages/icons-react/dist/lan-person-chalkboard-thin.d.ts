import React from 'react';

export interface LanPersonChalkboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonChalkboardThin: React.FC<LanPersonChalkboardThinProps>;
export default LanPersonChalkboardThin;
