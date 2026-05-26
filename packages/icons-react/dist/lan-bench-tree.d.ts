import React from 'react';

export interface LanBenchTreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBenchTree: React.FC<LanBenchTreeProps>;
export default LanBenchTree;
