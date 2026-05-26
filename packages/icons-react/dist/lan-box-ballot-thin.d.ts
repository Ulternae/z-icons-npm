import React from 'react';

export interface LanBoxBallotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxBallotThin: React.FC<LanBoxBallotThinProps>;
export default LanBoxBallotThin;
