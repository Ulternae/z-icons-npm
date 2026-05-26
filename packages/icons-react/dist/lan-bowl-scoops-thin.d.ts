import React from 'react';

export interface LanBowlScoopsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlScoopsThin: React.FC<LanBowlScoopsThinProps>;
export default LanBowlScoopsThin;
