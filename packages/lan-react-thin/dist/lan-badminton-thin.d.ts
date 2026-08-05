import React from 'react';

export interface LanBadmintonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadmintonThin(props: LanBadmintonThinProps): React.ReactElement;
export default LanBadmintonThin;
