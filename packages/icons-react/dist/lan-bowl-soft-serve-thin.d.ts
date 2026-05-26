import React from 'react';

export interface LanBowlSoftServeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlSoftServeThin: React.FC<LanBowlSoftServeThinProps>;
export default LanBowlSoftServeThin;
