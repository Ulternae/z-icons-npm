import React from 'react';

export interface LanBadgerHoneyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBadgerHoneyThin(props: LanBadgerHoneyThinProps): React.ReactElement;
export default LanBadgerHoneyThin;
