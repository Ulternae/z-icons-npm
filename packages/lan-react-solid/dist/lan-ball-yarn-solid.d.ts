import React from 'react';

export interface LanBallYarnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallYarnSolid(props: LanBallYarnSolidProps): React.ReactElement;
export default LanBallYarnSolid;
