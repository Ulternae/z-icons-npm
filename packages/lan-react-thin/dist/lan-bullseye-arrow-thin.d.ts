import React from 'react';

export interface LanBullseyeArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyeArrowThin(props: LanBullseyeArrowThinProps): React.ReactElement;
export default LanBullseyeArrowThin;
