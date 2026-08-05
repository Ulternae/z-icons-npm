import React from 'react';

export interface LanBalloonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBalloonThin(props: LanBalloonThinProps): React.ReactElement;
export default LanBalloonThin;
