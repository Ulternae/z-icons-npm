import React from 'react';

export interface LanHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartThin(props: LanHeartThinProps): React.ReactElement;
export default LanHeartThin;
