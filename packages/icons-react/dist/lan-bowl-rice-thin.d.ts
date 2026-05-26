import React from 'react';

export interface LanBowlRiceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlRiceThin: React.FC<LanBowlRiceThinProps>;
export default LanBowlRiceThin;
