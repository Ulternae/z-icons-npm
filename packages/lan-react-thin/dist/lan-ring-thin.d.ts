import React from 'react';

export interface LanRingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingThin(props: LanRingThinProps): React.ReactElement;
export default LanRingThin;
