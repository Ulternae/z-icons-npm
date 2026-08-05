import React from 'react';

export interface LanBalloonsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloonsSolid(props: LanBalloonsSolidProps): React.ReactElement;
export default LanBalloonsSolid;
