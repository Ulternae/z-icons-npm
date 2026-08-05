import React from 'react';

export interface LanHeartHalfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartHalfThin(props: LanHeartHalfThinProps): React.ReactElement;
export default LanHeartHalfThin;
