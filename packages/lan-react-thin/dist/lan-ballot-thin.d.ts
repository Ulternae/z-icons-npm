import React from 'react';

export interface LanBallotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotThin(props: LanBallotThinProps): React.ReactElement;
export default LanBallotThin;
