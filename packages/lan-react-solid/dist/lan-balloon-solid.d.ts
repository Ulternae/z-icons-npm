import React from 'react';

export interface LanBalloonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloonSolid(props: LanBalloonSolidProps): React.ReactElement;
export default LanBalloonSolid;
