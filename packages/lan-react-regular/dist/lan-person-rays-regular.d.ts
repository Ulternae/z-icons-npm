import React from 'react';

export interface LanPersonRaysRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonRaysRegular(props: LanPersonRaysRegularProps): React.ReactElement;
export default LanPersonRaysRegular;
