import React from 'react';

export interface LanMarsAndVenusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMarsAndVenusRegular(props: LanMarsAndVenusRegularProps): React.ReactElement;
export default LanMarsAndVenusRegular;
