import React from 'react';

export interface LanAirplayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAirplayRegular(props: LanAirplayRegularProps): React.ReactElement;
export default LanAirplayRegular;
