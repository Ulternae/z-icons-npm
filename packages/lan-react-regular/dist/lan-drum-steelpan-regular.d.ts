import React from 'react';

export interface LanDrumSteelpanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumSteelpanRegular(props: LanDrumSteelpanRegularProps): React.ReactElement;
export default LanDrumSteelpanRegular;
