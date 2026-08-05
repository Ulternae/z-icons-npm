import React from 'react';

export interface LanCardHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCardHeartThin(props: LanCardHeartThinProps): React.ReactElement;
export default LanCardHeartThin;
