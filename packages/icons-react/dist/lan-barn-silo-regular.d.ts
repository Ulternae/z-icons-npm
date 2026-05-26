import React from 'react';

export interface LanBarnSiloRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarnSiloRegular: React.FC<LanBarnSiloRegularProps>;
export default LanBarnSiloRegular;
