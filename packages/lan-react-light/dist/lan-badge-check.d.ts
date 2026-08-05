import React from 'react';

export interface LanBadgeCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeCheck(props: LanBadgeCheckProps): React.ReactElement;
export default LanBadgeCheck;
