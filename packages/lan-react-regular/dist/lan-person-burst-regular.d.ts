import React from 'react';

export interface LanPersonBurstRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBurstRegular(props: LanPersonBurstRegularProps): React.ReactElement;
export default LanPersonBurstRegular;
