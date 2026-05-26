import React from 'react';

export interface LanBowArcheryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowArchery: React.FC<LanBowArcheryProps>;
export default LanBowArchery;
