import React from 'react';

export interface LanPlugCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlugCircleBoltThin(props: LanPlugCircleBoltThinProps): React.ReactElement;
export default LanPlugCircleBoltThin;
