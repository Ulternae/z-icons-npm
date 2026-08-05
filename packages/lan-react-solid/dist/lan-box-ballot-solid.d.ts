import React from 'react';

export interface LanBoxBallotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxBallotSolid(props: LanBoxBallotSolidProps): React.ReactElement;
export default LanBoxBallotSolid;
