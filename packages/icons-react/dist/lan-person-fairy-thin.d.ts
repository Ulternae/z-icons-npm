import React from 'react';

export interface LanPersonFairyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonFairyThin: React.FC<LanPersonFairyThinProps>;
export default LanPersonFairyThin;
