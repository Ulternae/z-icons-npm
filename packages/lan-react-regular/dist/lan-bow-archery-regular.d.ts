import React from 'react';

export interface LanBowArcheryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowArcheryRegular(props: LanBowArcheryRegularProps): React.ReactElement;
export default LanBowArcheryRegular;
