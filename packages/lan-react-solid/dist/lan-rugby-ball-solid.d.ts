import React from 'react';

export interface LanRugbyBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRugbyBallSolid(props: LanRugbyBallSolidProps): React.ReactElement;
export default LanRugbyBallSolid;
