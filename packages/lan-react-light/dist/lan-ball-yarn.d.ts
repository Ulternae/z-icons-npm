import React from 'react';

export interface LanBallYarnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallYarn(props: LanBallYarnProps): React.ReactElement;
export default LanBallYarn;
