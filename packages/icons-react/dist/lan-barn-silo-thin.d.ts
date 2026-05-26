import React from 'react';

export interface LanBarnSiloThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnSiloThin: React.FC<LanBarnSiloThinProps>;
export default LanBarnSiloThin;
