import React from 'react';

export interface LanRefrigeratorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRefrigeratorRegular(props: LanRefrigeratorRegularProps): React.ReactElement;
export default LanRefrigeratorRegular;
