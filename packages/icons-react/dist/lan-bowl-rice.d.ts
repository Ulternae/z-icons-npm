import React from 'react';

export interface LanBowlRiceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlRice: React.FC<LanBowlRiceProps>;
export default LanBowlRice;
