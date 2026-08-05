import React from 'react';

export interface LanBallPileSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallPileSolid(props: LanBallPileSolidProps): React.ReactElement;
export default LanBallPileSolid;
