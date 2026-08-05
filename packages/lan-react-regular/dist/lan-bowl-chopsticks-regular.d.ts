import React from 'react';

export interface LanBowlChopsticksRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlChopsticksRegular(props: LanBowlChopsticksRegularProps): React.ReactElement;
export default LanBowlChopsticksRegular;
