import React from 'react';

export interface LanBowlScoopsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlScoops: React.FC<LanBowlScoopsProps>;
export default LanBowlScoops;
