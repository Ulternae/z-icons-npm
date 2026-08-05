import React from 'react';

export interface LanGolfBallTeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfBallTeeSolid(props: LanGolfBallTeeSolidProps): React.ReactElement;
export default LanGolfBallTeeSolid;
