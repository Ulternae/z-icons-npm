import React from 'react';

export interface LanBenchTreeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBenchTreeRegular: React.FC<LanBenchTreeRegularProps>;
export default LanBenchTreeRegular;
