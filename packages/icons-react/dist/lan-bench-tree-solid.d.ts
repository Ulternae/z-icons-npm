import React from 'react';

export interface LanBenchTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBenchTreeSolid: React.FC<LanBenchTreeSolidProps>;
export default LanBenchTreeSolid;
