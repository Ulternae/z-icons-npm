import React from 'react';

export interface LanBowArrowThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArrowThin(props: LanBowArrowThinProps): React.ReactElement;
export default LanBowArrowThin;
