import React from 'react';

export interface LanPersonDressSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonDressSimpleThin: React.FC<LanPersonDressSimpleThinProps>;
export default LanPersonDressSimpleThin;
