import React from 'react';

export interface LanBullseyePointerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyePointerThin(props: LanBullseyePointerThinProps): React.ReactElement;
export default LanBullseyePointerThin;
