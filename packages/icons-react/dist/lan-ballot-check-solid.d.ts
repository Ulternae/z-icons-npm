import React from 'react';

export interface LanBallotCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallotCheckSolid: React.FC<LanBallotCheckSolidProps>;
export default LanBallotCheckSolid;
