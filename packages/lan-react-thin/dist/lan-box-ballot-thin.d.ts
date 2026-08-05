import React from 'react';

export interface LanBoxBallotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxBallotThin(props: LanBoxBallotThinProps): React.ReactElement;
export default LanBoxBallotThin;
