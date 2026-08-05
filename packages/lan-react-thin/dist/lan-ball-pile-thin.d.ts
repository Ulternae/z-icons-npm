import React from 'react';

export interface LanBallPileThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallPileThin(props: LanBallPileThinProps): React.ReactElement;
export default LanBallPileThin;
