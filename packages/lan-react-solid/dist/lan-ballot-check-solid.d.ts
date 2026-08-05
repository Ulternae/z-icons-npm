import React from 'react';

export interface LanBallotCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotCheckSolid(props: LanBallotCheckSolidProps): React.ReactElement;
export default LanBallotCheckSolid;
