import React from 'react';

export interface LanScooterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScooterRegular(props: LanScooterRegularProps): React.ReactElement;
export default LanScooterRegular;
