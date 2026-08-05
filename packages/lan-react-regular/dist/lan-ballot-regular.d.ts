import React from 'react';

export interface LanBallotRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallotRegular(props: LanBallotRegularProps): React.ReactElement;
export default LanBallotRegular;
