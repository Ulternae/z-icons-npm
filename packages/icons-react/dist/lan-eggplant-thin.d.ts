import React from 'react';

export interface LanEggplantThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEggplantThin: React.FC<LanEggplantThinProps>;
export default LanEggplantThin;
