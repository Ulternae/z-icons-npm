import React from 'react';

export interface LanBullseyeArrowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyeArrow(props: LanBullseyeArrowProps): React.ReactElement;
export default LanBullseyeArrow;
