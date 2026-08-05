import React from 'react';

export interface LanBaseballBatBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatBallThin(props: LanBaseballBatBallThinProps): React.ReactElement;
export default LanBaseballBatBallThin;
