import React from 'react';

export interface LanVenusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusRegular(props: LanVenusRegularProps): React.ReactElement;
export default LanVenusRegular;
