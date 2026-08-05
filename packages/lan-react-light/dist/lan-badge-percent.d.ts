import React from 'react';

export interface LanBadgePercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgePercent(props: LanBadgePercentProps): React.ReactElement;
export default LanBadgePercent;
