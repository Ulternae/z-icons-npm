import React from 'react';

export interface LanBullseyePointerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyePointerRegular(props: LanBullseyePointerRegularProps): React.ReactElement;
export default LanBullseyePointerRegular;
