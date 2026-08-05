import React from 'react';

export interface LanBallYarnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBallYarnRegular(props: LanBallYarnRegularProps): React.ReactElement;
export default LanBallYarnRegular;
