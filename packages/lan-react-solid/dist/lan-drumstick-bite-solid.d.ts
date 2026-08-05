import React from 'react';

export interface LanDrumstickBiteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickBiteSolid(props: LanDrumstickBiteSolidProps): React.ReactElement;
export default LanDrumstickBiteSolid;
