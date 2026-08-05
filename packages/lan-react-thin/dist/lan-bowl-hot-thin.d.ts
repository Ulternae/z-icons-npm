import React from 'react';

export interface LanBowlHotThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlHotThin(props: LanBowlHotThinProps): React.ReactElement;
export default LanBowlHotThin;
