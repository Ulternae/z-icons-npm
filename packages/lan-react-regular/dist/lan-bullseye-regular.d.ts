import React from 'react';

export interface LanBullseyeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullseyeRegular(props: LanBullseyeRegularProps): React.ReactElement;
export default LanBullseyeRegular;
