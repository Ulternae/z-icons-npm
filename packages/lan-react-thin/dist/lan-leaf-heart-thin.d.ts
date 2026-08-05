import React from 'react';

export interface LanLeafHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafHeartThin(props: LanLeafHeartThinProps): React.ReactElement;
export default LanLeafHeartThin;
