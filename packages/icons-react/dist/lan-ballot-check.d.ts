import React from 'react';

export interface LanBallotCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallotCheck: React.FC<LanBallotCheckProps>;
export default LanBallotCheck;
