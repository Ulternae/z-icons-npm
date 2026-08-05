import React from 'react';

export interface LanBallYarnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallYarnThin(props: LanBallYarnThinProps): React.ReactElement;
export default LanBallYarnThin;
