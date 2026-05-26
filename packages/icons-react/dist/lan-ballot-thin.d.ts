import React from 'react';

export interface LanBallotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallotThin: React.FC<LanBallotThinProps>;
export default LanBallotThin;
