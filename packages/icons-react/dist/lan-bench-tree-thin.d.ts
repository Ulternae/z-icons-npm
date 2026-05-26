import React from 'react';

export interface LanBenchTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBenchTreeThin: React.FC<LanBenchTreeThinProps>;
export default LanBenchTreeThin;
