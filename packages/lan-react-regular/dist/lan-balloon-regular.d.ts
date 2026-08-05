import React from 'react';

export interface LanBalloonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloonRegular(props: LanBalloonRegularProps): React.ReactElement;
export default LanBalloonRegular;
