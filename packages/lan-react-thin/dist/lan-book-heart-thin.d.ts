import React from 'react';

export interface LanBookHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookHeartThin(props: LanBookHeartThinProps): React.ReactElement;
export default LanBookHeartThin;
