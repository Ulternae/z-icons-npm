import React from 'react';

export interface LanBarsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBars: React.FC<LanBarsProps>;
export default LanBars;
