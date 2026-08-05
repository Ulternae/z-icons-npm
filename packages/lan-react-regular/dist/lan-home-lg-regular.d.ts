import React from 'react';

export interface LanHomeLgRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeLgRegular(props: LanHomeLgRegularProps): React.ReactElement;
export default LanHomeLgRegular;
