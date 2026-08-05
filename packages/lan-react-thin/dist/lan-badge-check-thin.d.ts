import React from 'react';

export interface LanBadgeCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgeCheckThin(props: LanBadgeCheckThinProps): React.ReactElement;
export default LanBadgeCheckThin;
