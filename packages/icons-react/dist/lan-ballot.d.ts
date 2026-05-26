import React from 'react';

export interface LanBallotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallot: React.FC<LanBallotProps>;
export default LanBallot;
