import React from 'react';

export interface LanVenusDoubleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVenusDouble(props: LanVenusDoubleProps): React.ReactElement;
export default LanVenusDouble;
