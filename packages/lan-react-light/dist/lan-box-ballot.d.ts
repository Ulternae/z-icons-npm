import React from 'react';

export interface LanBoxBallotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxBallot(props: LanBoxBallotProps): React.ReactElement;
export default LanBoxBallot;
