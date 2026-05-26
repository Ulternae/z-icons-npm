import React from 'react';

export interface LanBowlShavedIceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlShavedIceThin: React.FC<LanBowlShavedIceThinProps>;
export default LanBowlShavedIceThin;
