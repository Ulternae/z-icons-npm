import React from 'react';

export interface LanBallotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallotSolid: React.FC<LanBallotSolidProps>;
export default LanBallotSolid;
