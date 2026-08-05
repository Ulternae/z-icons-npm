import React from 'react';

export interface LanBallotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotSolid(props: LanBallotSolidProps): React.ReactElement;
export default LanBallotSolid;
