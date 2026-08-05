import React from 'react';

export interface LanGavelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGavelRegular(props: LanGavelRegularProps): React.ReactElement;
export default LanGavelRegular;
