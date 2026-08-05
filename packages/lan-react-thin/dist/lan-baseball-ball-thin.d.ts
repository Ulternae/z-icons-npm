import React from 'react';

export interface LanBaseballBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBallThin(props: LanBaseballBallThinProps): React.ReactElement;
export default LanBaseballBallThin;
