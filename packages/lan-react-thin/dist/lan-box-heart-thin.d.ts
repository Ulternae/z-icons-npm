import React from 'react';

export interface LanBoxHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxHeartThin(props: LanBoxHeartThinProps): React.ReactElement;
export default LanBoxHeartThin;
