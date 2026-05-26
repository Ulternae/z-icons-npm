import React from 'react';

export interface LanBoxBallotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxBallotSolid: React.FC<LanBoxBallotSolidProps>;
export default LanBoxBallotSolid;
