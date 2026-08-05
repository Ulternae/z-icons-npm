import React from 'react';

export interface LanHomeHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeHeartThin(props: LanHomeHeartThinProps): React.ReactElement;
export default LanHomeHeartThin;
