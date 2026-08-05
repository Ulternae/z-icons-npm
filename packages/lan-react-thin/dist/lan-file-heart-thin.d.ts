import React from 'react';

export interface LanFileHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileHeartThin(props: LanFileHeartThinProps): React.ReactElement;
export default LanFileHeartThin;
