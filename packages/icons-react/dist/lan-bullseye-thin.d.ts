import React from 'react';

export interface LanBullseyeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBullseyeThin: React.FC<LanBullseyeThinProps>;
export default LanBullseyeThin;
