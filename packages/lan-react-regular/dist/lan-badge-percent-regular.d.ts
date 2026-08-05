import React from 'react';

export interface LanBadgePercentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgePercentRegular(props: LanBadgePercentRegularProps): React.ReactElement;
export default LanBadgePercentRegular;
