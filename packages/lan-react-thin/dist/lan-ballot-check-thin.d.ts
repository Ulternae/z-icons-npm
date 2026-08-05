import React from 'react';

export interface LanBallotCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotCheckThin(props: LanBallotCheckThinProps): React.ReactElement;
export default LanBallotCheckThin;
