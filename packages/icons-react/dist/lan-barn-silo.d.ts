import React from 'react';

export interface LanBarnSiloProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnSilo: React.FC<LanBarnSiloProps>;
export default LanBarnSilo;
