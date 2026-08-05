import React from 'react';

export interface LanBowlHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlHot(props: LanBowlHotProps): React.ReactElement;
export default LanBowlHot;
