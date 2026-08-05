import React from 'react';

export interface LanBadgePercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgePercentSolid(props: LanBadgePercentSolidProps): React.ReactElement;
export default LanBadgePercentSolid;
