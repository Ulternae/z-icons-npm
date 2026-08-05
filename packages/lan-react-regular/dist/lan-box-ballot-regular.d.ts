import React from 'react';

export interface LanBoxBallotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxBallotRegular(props: LanBoxBallotRegularProps): React.ReactElement;
export default LanBoxBallotRegular;
