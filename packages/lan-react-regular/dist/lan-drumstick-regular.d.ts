import React from 'react';

export interface LanDrumstickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickRegular(props: LanDrumstickRegularProps): React.ReactElement;
export default LanDrumstickRegular;
