import React from 'react';

export interface LanBaseballBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBaseballBallSolid(props: LanBaseballBallSolidProps): React.ReactElement;
export default LanBaseballBallSolid;
