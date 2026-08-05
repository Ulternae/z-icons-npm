import React from 'react';

export interface LanCarBurstRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBurstRegular(props: LanCarBurstRegularProps): React.ReactElement;
export default LanCarBurstRegular;
