import React from 'react';

export interface LanBadgePercentThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgePercentThin(props: LanBadgePercentThinProps): React.ReactElement;
export default LanBadgePercentThin;
