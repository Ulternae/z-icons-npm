import React from 'react';

export interface LanBowArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArrow(props: LanBowArrowProps): React.ReactElement;
export default LanBowArrow;
