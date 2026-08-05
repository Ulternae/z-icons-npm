import React from 'react';

export interface LanBadgeCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeCheckSolid(props: LanBadgeCheckSolidProps): React.ReactElement;
export default LanBadgeCheckSolid;
