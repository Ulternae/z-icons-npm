import React from 'react';

export interface LanBaseballBatBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBatBallSolid(props: LanBaseballBatBallSolidProps): React.ReactElement;
export default LanBaseballBatBallSolid;
